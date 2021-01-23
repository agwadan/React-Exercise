import React, { useState, useEffect } from 'react';


export default function UseEffectCleanUp() {

const [size, setSize] = useState(window.innerWidth);

const changeSize = () => {
  setSize(window.innerWidth);
}

useEffect(()=> {
  window.addEventListener('resize', changeSize);
  return()=>{
    console.log('cleanup');
    window.addEventListener('resize', changeSize);
  }
})

  return (
    <div>
      <h1>Window</h1>
      <h3>{size} PX</h3>
    </div>
  )
}
