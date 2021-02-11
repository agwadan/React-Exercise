import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../9-customHooks/useFetch';

const url = 'https://api.github.com/users'

const MemoIndex = () => {

  const { users } = useFetch(url);
  const [count, setCount] = useState(0);

  return (
    <div
      className='jumbotron'
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
            <h4>Big List</h4>
          )
        })
      }
    </section>
  )
}

export default MemoIndex;