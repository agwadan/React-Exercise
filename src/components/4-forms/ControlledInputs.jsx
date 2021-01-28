import React, { useState } from 'react';

export default function ControlledInputs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = { name: name, email: email };
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

          <button className=' btn btn-primary' type='submit'>Add Person</button>
        </form>
      </article >
    </div >
  )
}
