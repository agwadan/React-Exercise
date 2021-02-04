
//            PASSING PROPS THROUGH VARIOUS LEVELS OF COMPONENTS
//_______________________________________________________________________


import React, { useState } from 'react';
import List from './List';
import { data } from '../../data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    return people.filter((person) => person.id !== id)
  };
  return (
    <section>
      <h1>Prop Drilling</h1>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}
export default PropDrilling;