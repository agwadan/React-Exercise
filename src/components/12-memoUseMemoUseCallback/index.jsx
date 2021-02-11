import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../9-customHooks/useFetch';

const url = 'https://api.github.com/users';

const MemoIndex = () => {

  const { users } = useFetch(url);
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ marginTop: '4rem', alignItems: 'center' }}
    >
      <h1>Count: {count}</h1>
      <button className='btn btn-primary btn-lg' onClick={() => setCount(count + 1)}>Count Up</button>

      <BigList users={users} />

    </div >
  )
}

const BigList = ({ users }) => {
  return (
    <section>
      {
        users.map((user) => {
          return (
            <SingleProduct key={user.id} {...user}></SingleProduct>
          )
        })
      }
    </section>
  )
}

const SingleProduct = ({ login, avatar_url }) => {
  return (
    <article className='jumbotron' style={{ marginTop: '4rem' }}>
      <img className='rounded' src={avatar_url} alt={login} className='rounded'
        height='150'
        width='130'
        style={{ marginBottom: '9px' }} />
      <h4>{login}</h4>
    </article>
  )
}

export default MemoIndex;