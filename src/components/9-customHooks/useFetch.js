import { useState, useEffect } from 'react';

const useFetch = () => {

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
}