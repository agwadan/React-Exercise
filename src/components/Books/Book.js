import React from 'react';

function Book(pips) {

  const { title, origin, imgUrl, children } = pips; //-------------- destructuring the "pips"

  console.log(pips);
  return (
    <div>
      <h2>{title} is a good Presenter from {origin}.</h2>
      {children}
      <img src={imgUrl} alt='' />
    </div>
  );
}

export default Book