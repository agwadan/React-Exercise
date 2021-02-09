import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../9-customHooks/useFetch';

const url = 'https://api.github.com/users';

const Person = () => {

  const { users } = useFetch(url);
  console.log(users);
  const [name, setName] = useState('default name');
  const { id, login } = useParams();
  console.log('This is the  id: ' + id);
  //console.log('This is the  name: ' + login);

  /*  useEffect(() => {
     const newUser = users.find((user) => user.id === parseInt(id));
     console.log('These are the users: ' + users);
     setName(newUser.login);
   }, []); */

  return (
    <div>
      <h2>{id}</h2>
      <Link to='/people' className='btn btn-primary'>Back to People</Link>
    </div>
  )
}

export default Person;