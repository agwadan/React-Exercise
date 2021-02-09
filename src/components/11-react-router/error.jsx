import { Link } from 'react-router-dom';
import React from 'react';

const ErrorPage = () => {
  return (
    <div>
      <h1>Error :-(</h1>
      <Link className='btn btn-primary' to='/'>Return Home</Link>
    </div>
  )
}

export default ErrorPage; 