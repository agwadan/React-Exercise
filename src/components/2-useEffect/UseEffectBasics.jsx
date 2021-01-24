//----useEffect runs after every render-------

import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call UseEffect');

    if (value > 0) {
      document.title = `New Messages(${value})`
    }
  },[value]);//------------------------------------------------------------- With empty second argument, useEffect runs only in first render.

  useEffect(()=>{
    console.log('First Render.');
  },[]);
  
  console.log('render component');

  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>Change Value</button>
    </div>
  )
}

export default UseEffectBasics;