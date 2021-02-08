import React, { useState, useEffect } from 'react';

const url = 'https://covid19.mathdro.id/api';

const FetchExample = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(url);
    const products = await res.json();
    setProducts(products);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div>
      <h1>{loading ? 'Loading...' : 'Custom Hooks'}</h1>
    </div>
  )
}

export default FetchExample;