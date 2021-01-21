import React from 'react';
import AnyBook from './Book';
import {presenters} from './Presenters';


function Books(pips) {

  return (
    <div>
      {presenters.map((pres) => {
        const { title, origin, imgUrl } = pres;
        return <AnyBook key={pres.id} {...pres}></AnyBook>;
      })
      }
    </div>
  );
}

export default Books;