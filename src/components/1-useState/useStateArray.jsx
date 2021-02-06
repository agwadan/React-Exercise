import React from 'react';
import { presenters } from './Presenters';

const UseStateArray = () => {

  const [nominees, setNominees] = React.useState(presenters);

  const removeItem = (id) => {
    let newNominees = nominees.filter((nominee) => nominee.id !== id);
    setNominees(newNominees);
  }

  return (
    <React.Fragment>
      {
        nominees.map((nominee) => {
          const { id, title } = nominee;
          return (
            <div>
              <h4 key={id}>{title}</h4>
              <button
                className='btn btn-primary'
                onClick={() => removeItem(id)}
                style={{ marginBottom: '2rem' }}
              >Remove</button>
            </div>
          )
        })
      }

      <button
        className='btn btn-danger'
        onClick={() => setNominees([])}
        style={{ marginTop: '2rem' }}
      >
        Delete All
      </button>

    </React.Fragment>
  )
}

export default UseStateArray;