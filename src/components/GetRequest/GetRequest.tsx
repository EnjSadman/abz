import React, { useEffect, useState } from 'react';
import { ServerResponse, User } from '../../react-app-env';
import { serverRequest } from '../api/api';
import { Card } from '../Card/Card';
import './GetRequest.scss';

interface Props {
  serverResponse : number | null,
}

export const GetRequest : React.FC<Props> = ({ serverResponse }) => {
  const [usersFromServer, setUsersFromServer] = useState<User[]>([]);
  const [currentFetchLocation, setCurrentFetchLocation] = useState<string | null>('users?page=1&count=6');
  const [getResult, setGetResult] = useState<ServerResponse>();

  useEffect(() => {
    setUsersFromServer([]);
    setCurrentFetchLocation('users?page=1&count=6');
  }, [serverResponse]);

  useEffect(() => {
    const fetcher = async () => {
      if (currentFetchLocation !== null) {
        const result = await serverRequest(currentFetchLocation);

        result.users.sort(
          (a : User, b : User) => b.registration_timestamp - a.registration_timestamp,
        );

        setGetResult(result);
        setUsersFromServer([...usersFromServer, ...result.users].sort(
          (a : User, b : User) => b.registration_timestamp - a.registration_timestamp,
        ));
        setCurrentFetchLocation(null);
      }
    };

    fetcher();
  }, [currentFetchLocation]);

  return (
    <div className="container get" id="users">
      <h1 className="get__heading">Working with GET request</h1>
      {usersFromServer.length > 0 && usersFromServer.map(singleUser => (
        <Card
          key={singleUser.email}
          imageUrl={singleUser.photo}
          name={singleUser.name}
          email={singleUser.email}
          phone={singleUser.phone}
          position={singleUser.position}
        />
      ))}
      {getResult?.page !== getResult?.total_pages && (
        <button
          type="button"
          className="button get__button"
          onClick={() => {
            if (getResult !== undefined) {
              if (getResult.links.next_url === null) {
                setCurrentFetchLocation(null);
              } else {
                const trimmer = getResult.links.next_url.indexOf('v1/');

                setCurrentFetchLocation(
                  getResult.links.next_url.slice(trimmer + 3, getResult.links.next_url.length),
                );
              }
            }
          }}
        >
          Show more
        </button>
      )}
    </div>
  );
};
