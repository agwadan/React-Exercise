import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  return (
    <section>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button onClick={() => setValue(value - 1)}>decrease</button>
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={() => setValue(value + 1)}>increase</button>
    </section>
  );
}

export default UseStateCounter;