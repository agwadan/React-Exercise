import React from 'react';

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button
        className='btn btn-danger'
        onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}
export default SinglePerson;