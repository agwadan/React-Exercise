import React, { useState } from 'react';

export default function ControlledInputs() {
  return (
    <div>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input type='text' id='firstName' name='firstName' />
          </div>
        </form>
      </article>
    </div>
  )
}
