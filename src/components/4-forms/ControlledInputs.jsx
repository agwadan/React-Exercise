import React, { useState } from 'react';

export default function ControlledInputs() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('dddd');
  }

  return (
    <div>
      <article>
        <form className='form' onSubmit={handleSubmit}>

          <div className='form-group'>
            <label htmlFor='firstName'>Name </label>
            <input type='text' id='firstName' name='firstName' className='form-control' />
          </div>

          <div className='form-group'>
            <label htmlFor='firstName'>Email </label>
            <input type='text' id='email' name='email' className='form-control' />
          </div>

          <button className=' btn btn-primary' type='submit'>Add Person</button>
        </form>
      </article >
    </div >
  )
}
