//Use ref preserves values between renders but doesn't trigger a re-render.
//--------------------------------------------------------------------------

import React, { useEffect, useRef } from 'react';


export default function UseRefBasics() {


  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  })

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>

        <div className='form-group'>
          <input type='text' ref={refContainer} />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </form>

      <p ref={divContainer}>Hello World</p>
    </div>
  )
}
