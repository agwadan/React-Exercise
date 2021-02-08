import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

const url = 'https://covid19.mathdro.id/api';

const FetchExample = () => {
  const { loading, products } = useFetch(url);
  console.log(products);

  return (
    <div>
      <h1>{loading ? 'Loading...' : 'Custom Hooks'}</h1>
    </div>
  )
}

export default FetchExample;