import React, { useEffect, useState } from 'react';
import { ServerResponse, User } from '../../react-app-env';
import { serverRequest } from '../api/api';
import { Card } from '../Card/Card';
import './GetRequest.scss';

export const GetRequest : React.FC = () => {
  const [usersFromServer, setUsersFromServer] = useState<User[]>([]);
  const [currentFetchLocation, setCurrentFetchLocation] = useState<string | null>('users?page=1&count=6');
  const [getResult, setGetResult] = useState<ServerResponse>();

  useEffect(() => {
    const fetcher = async () => {
      if (currentFetchLocation !== null) {
        const result = await serverRequest(currentFetchLocation);

        setGetResult(result);
        setUsersFromServer([...usersFromServer, ...result.users]);
      }
    };

    fetcher();
  }, [currentFetchLocation]);

  return (
    <div className="container get">
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
