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
        <button className='btn btn-danger' onClick={() => setValue(value - 1)} style={{ marginRight: '1rem' }}>decrease</button>
        <button className='btn btn-primary' onClick={() => setValue(0)} style={{ marginRight: '1rem' }}>Reset</button>
        <button className='btn btn-success' onClick={() => setValue(value + 1)} style={{ marginRight: '1rem' }}>increase</button>
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
        <button className='btn btn-primary' onClick={() => complexIncrease()} >Change Value</button>
      </section>
    </div>
  );
}

export default UseStateCounter;