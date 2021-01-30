//Use ref preserves values between renders but doesn't trigger a re-render.
//--------------------------------------------------------------------------

import React, { useEffect, useRef } from 'react';


export default function UseRefBasics() {


  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>

        <div className='form-group'>
          <input type='text' ref={refContainer} />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
