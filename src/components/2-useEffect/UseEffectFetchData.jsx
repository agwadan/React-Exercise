import React, { useState, useEffect } from 'react';
import './users.css';
const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  /* FUNCTION TO FETCH THE USERS FROM API ENDPOINT */
  const GetUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  /* 
    USEEFFECT
    ---------
    => useEffect cannot return a promise/ can't use async await.
    */
  useEffect(() => {
    GetUsers();
  }, [])

  return (
    <div>
      <h1>GitHub Users</h1>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <div>
            <h4 key={user.id}>{user.login}</h4>
            <img src={user.avatar_url} />
          </div>
        )
      })}
    </div>
  )



  /*  const [users, setUsers] = useState([]);
 
   const getUsers = async () => {
     const response = await fetch(url);
     const users = await response.json();
     setUsers(users);
   }
 
   useEffect(() => {
     getUsers();
   }, []);
 
   return (
     <div>
       <h2>Github Users</h2>
       <ul>
         {
           users.map((user) => {
             const { id, login, avatar_url , html_url} = user;
             return (
               <li key={id}>
                 <img src={avatar_url} alt={login}/>
                 <div>
                   <h4>{login}</h4>
                   <a href={html_url}>Profile</a>
                 </div>
               </li>
             )
           })
         }
       </ul>
     </div>
   ) */
}

export default UseEffectFetchData;