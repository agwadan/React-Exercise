import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <div>
      <section style={{
        margin: '4rem 0'
      }
        , {
        marginLeft: '4rem'
      }
      }>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button onClick={() => setValue(value - 1)} >decrease</button>
        <button onClick={() => setValue(0)}>Reset</button>
        <button onClick={() => setValue(value + 1)}>increase</button>
      </section>

      <section style={{
        margin: '4rem 0'
      }
        , {
        marginLeft: '4rem'
      }
      }>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button onClick={() => complexIncrease()} >Change Value</button>
      </section>
    </div>
  );
}

export default UseStateCounter;