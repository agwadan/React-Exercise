import React, { useState } from 'react'

export default function ShortCircuit() {

  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';


  return (
    <div>
      <h1>First Value: {firstValue}</h1>
      <h2>Second Value: {secondValue}</h2>
      <br />
      {!text && <h3>Agwa Dan</h3>}
      <br />
      <br />

      <button onClick={() => setIsError(!isError)}>Toggle Error</button>
      {isError ? <h2>Error...</h2> : <h2>All is well :-)</h2>}

    </div>
  )
}
