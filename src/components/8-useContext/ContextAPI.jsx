
//                  FIX FOR PROP DRILLING
//_______________________________________________________________________


import React, { useState, useContext } from 'react';
import { data } from '../../data';

const PersonContext = React.createContext();

//-----------------------------------------------------------------------------------//

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id))

  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}> {/* -------------------------------- Context.Provider wraps the entire component tree. */}
      <h1>Context API / useContext</h1>
      <List />
    </PersonContext.Provider>
  )
}

//----------------------------------------------------------------------------------//

const List = ({ people }) => {
  const mainData = useContext(PersonContext);
  return (
    <div>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </div>
  )
}

//----------------------------------------------------------------------------------//

const SinglePerson = ({ id, name }) => {

  const { removePerson } = useContext(PersonContext);
  console.log(data);

  return (
    <div>
      <h4>{name}</h4>
      <button
        className='btn btn-danger'
        onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;