import React, { useEffect, useState } from 'react';
import { User } from '../../react-app-env';
import { serverRequest } from '../api/api';
import { Card } from '../Card/Card';
import './GetRequest.scss';

export const GetRequest : React.FC = () => {
  const [usersFromServer, setUsersFromServer] = useState<User[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      const result = await serverRequest('users?page=1&count=6');

      setUsersFromServer(result.users);
    };

    fetcher();
  }, []);

  return (
    <div className="container get">
      <h1 className="get__heading">Working with GET request</h1>
      {usersFromServer.map(singleUser => (
        <Card
          key={singleUser.registration_timestamp}
          imageUrl={singleUser.photo}
          name={singleUser.name}
          email={singleUser.email}
          phone={singleUser.phone}
          position={singleUser.position}
        />
      ))}
      <button type="button" className="button">
        Show more
      </button>
    </div>
  );
};
