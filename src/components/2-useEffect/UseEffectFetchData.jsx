import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  return (
    <div>
      <h1>Fetch Data</h1>
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