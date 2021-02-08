import React from 'react';
import { useFetch } from '../9-customHooks/useFetch';
import User from './user';

const url = 'https://api.github.com/users';

const Setup = () => {

  const { users } = useFetch(url);

  return (
    <div>
      <h2>Users</h2>
      <section>
        {
          users.map((user) => {
            return <User key={user.id} {...users} />
          })
        }
      </section>
    </div>
  )
}

export default Setup;