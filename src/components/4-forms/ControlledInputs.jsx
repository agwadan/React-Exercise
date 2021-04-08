import React, { useState } from 'react';

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUser] = useState([])

  /*   const updateName = (e) => {
  
    } */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      const person = {
        name: name,
        email: email
      }
      console.log(person);
      setUser((users) => {
        return [...users, person];
      });

      setName('');
      setEmail('');
    } else {
      console.log('user not registered');
    }
    console.log(`${name}'s email is ${email}`);
    console.log(users);
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
      {users.map((user) => {
        const { name, email } = user;
        return (
          <div key={email}>
            <p>{name}'s email is <i><u>{email}</u></i></p>
          </div>
        )
      })}
    </article>
  )
}

export default ControlledInputs;

/* export default function ControlledInputs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = {
        id: new Date().getTime().toString(),
        name: name,
        email: email
      };
      setPeople(() => {
        return (
          [...people, person]
        )
      })
      console.log(person);
    } else {
      console.log('empty form :-(');
    }
  }

  return (
    <div>
      <article>
        <form className='form' onSubmit={handleSubmit}>

          <div className='form-group'>
            <label htmlFor='firstName'>Name </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className='form-group'>
            <label htmlFor='firstName'>Email </label>
            <input
              type='text'
              id='email'
              name='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='form-group'>
            <label htmlFor='firstName'>Email </label>
            <input
              type='text'
              id='email'
              name='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <button className=' btn btn-primary' type='submit'>Add Person</button>
        </form>

        {people.map((person) => {
          const { id, name, email } = person;
          return (<div className='item' key={id}>
            <h4>{name}</h4>
            <p>{email}</p>
          </div>)
        })}

      </article >
    </div >
  )
}
 */