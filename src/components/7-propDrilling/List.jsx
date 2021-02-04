import React from 'react';
import SinglePerson from './SinglePerson';

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <h2><SinglePerson key={person.id} {...person} removePerson={removePerson} /></h2>

      })}
    </div>
  )
}
export default List;