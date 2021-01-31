import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';

export default function Index() {

  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      showModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('');
    } else {
      showModal(true);
    }
  }

  return (
    <div>
      {showModal && <Modal />}

      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <input className='form-control' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button className='btn btn-primary' type='submit'>Add</button>
      </form>

      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.id}</h4>
          </div>);
      })}

    </div>
  )
}