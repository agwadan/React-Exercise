import React, { useState } from 'react';

export default function MultipleInputs() {

  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    name: '',
    email: '',
    age: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({
      ...person,
      [name]: value
    })
    console.log(name, value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <article>
        <form className='form' onSubmit={handleSubmit}>

          <div className='form-group'>
            <label htmlFor='firstName'>Name </label>
            <input
              type='text'
              id='name'
              name='name'
              className='form-control'
              value={person.name}
              onChange={handleChange} />
          </div>

          <div className='form-group'>
            <label htmlFor='firstName'>Email </label>
            <input
              type='text'
              id='email'
              name='email'
              className='form-control'
              value={person.email}
              onChange={handleChange} />
          </div>

          <div className='form-group'>
            <label htmlFor='firstName'>Age </label>
            <input
              type='text'
              id='age'
              name='age'
              className='form-control'
              value={person.age}
              onChange={handleChange} />
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
