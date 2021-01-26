import React, { useState } from 'react';
import { presenters } from './Presenters';
import './UseStateObject.css';

const UseStateObject = () => {

  const [nominee, setNominee] = useState({
    name: 'ee',
    age: '44',
  });

const changeMessage = () =>{
  setNominee({
    ...nominee, /* using the spread operator. */
    name : 'Jeremy Clarkson'
  })
}

  console.log(nominee);

  return (
    <div className='details'>
      <h3>{nominee.name}</h3>
      <h4>{nominee.age}</h4>
      <button onClick={() => changeMessage()}>change name</button>
    </div>
  )
}

export default UseStateObject