import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';

const reducer = (state, action) => {

  console.log(state, action);
  if (action.type === 'ADD_ITEM') {

    const newPeople = [
      ...state.people,
      action.payLoad
    ]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added'
    }
  }
  throw new Error('No matching action type');
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hey :-)'
}

//                    START OF THE COMPONENT
//_______________________________________________________________________

const Index = () => {

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState); //------------------ Helps to make all changes at once after dispatch has been called.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payLoad: newItem });
    } else {
      dispatch({ type: 'RANDOM' });
    }
  }

  return (
    <div>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}

      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <input className='form-control' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button className='btn btn-primary' type='submit'>Add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>);
      })}

    </div>
  )
}

export default Index;