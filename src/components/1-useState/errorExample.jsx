import React from 'react';

const ErrorExample = () => {

  let name = 'Agwa';

  const handleClick = () => {
    name = 'Jeremy';
    console.log(name);
  }

  return (
    <React.Fragment>
      <h2>Agwa</h2>
      <button
        type='button'
        className='btn btn-success'
        onClick={handleClick}
      >
        Change Name
      </button>
    </React.Fragment>
  )
}

export default ErrorExample;