import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../9-customHooks/useFetch';

const url = 'https://api.github.com/users'

const MemoIndex = () => {

  const { users } = useFetch(url);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Count Up</button>
    </div>
  )
}

export default MemoIndex;