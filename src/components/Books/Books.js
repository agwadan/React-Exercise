import React from 'react';
import AnyBook from './Book'; //------------------------ The name of the import is not the same as that of the export because the export is done with the key word default.

import {presenters} from '../1-useState/Presenters';


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