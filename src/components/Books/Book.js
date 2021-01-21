import React from 'react';

function Book(pips) {

  const { title, origin, imgUrl, children } = pips; //-------------- destructuring the "pips"

  function clickHandler() {
    alert('Awesome....');
  }

  //console.log(pips);
  return (
    <div className='book'>
      <h3 onClick={()=>console.log(title)}>{title}</h3>
      <h5>is from {origin}</h5>
      <img src={imgUrl} alt='' />
      <button type='button' onClick={clickHandler}>
        Agree
      </button>
    </div >
  );
}

export default Book