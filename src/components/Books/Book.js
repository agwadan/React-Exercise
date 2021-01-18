import React from 'react';

function Book(pips) {

  const { title, origin, imgUrl, children } = pips.pres; //-------------- destructuring the "pips"

  //console.log(pips);
  return (
    <div className='book'>
      <h3>{title}</h3>
      <h5>{origin}</h5>
      <img src={imgUrl} alt='' />
    </div>
  );
}

export default Book