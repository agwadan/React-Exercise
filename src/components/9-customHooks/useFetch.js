
//Custom Hooks must begin with the word "use" e.g "useFetch"

import { useState, useEffect } from 'react';

export const useFetch = (url) => {

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getCases = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUsers(users);
    setLoading(false);
  }

  useEffect(() => {
    getCases();
  }, [url]);

  return { loading, users }
}