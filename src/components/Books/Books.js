import React from 'react';
import Book from './Book';

const grandTour = [
  {
    id: 1,
    title: "Jeremy Clarkson",
    origin: 'Doncaster',
    imgUrl: "logo192.png"
  },
  {
    id: 2,
    title: 'Richard Hammond',
    origin: 'Birmingham',
    imgUrl: "logo192.png"
  },
  {
    id: 3,
    title: 'James May',
    origin: 'some place I do not know',
    imgUrl: 'Turbo2.png'
  }
]

function Books(pips) {

  return (
    <div>
      {grandTour.map((pres) => {
        const { title, origin, imgUrl } = pres;
        return <Book key={pres.id} {...pres}></Book>;
      })
      }
    </div>
  );
}

export default Books;