import React from 'react';

function Book(pips) {

  const { title, origin, imgUrl, children } = pips; //-------------- destructuring the "pips"

  function clickHandler(e) {
    console.log(e);
    console.log(e.target);
    alert('Awesome....');
  }

  //console.log(pips);
  return (
    <div className='book' onMouseOver={()=>{
      console.log(title);
    }}>
      <h3 onClick={()=>console.log(title)}>{title}</h3>
      <h5>is from {origin}</h5>
      <img src={imgUrl} alt='' />
      <button type='button' onClick={clickHandler}> {/* for functions that are invocked immediately, arrow functions should be used. */}
        Agree
      </button>
    </div >
  );
}

export default Book