import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

export default function MultipleReturns() {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((user) => {
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch(error => console(error));
  }, [])

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h2>Error</h2>
      </div>
    )
  }

  return (
    <h1>{user}</h1>
  )

}
