
//Custom Hooks must begin with the word "use" e.g "useFetch"

import { useState, useEffect } from 'react';

export const useFetch = (url) => {

  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState([]);

  const getCases = async () => {
    const res = await fetch(url);
    const cases = await res.json();
    setCases(cases);
    setLoading(false);
  }

  useEffect(() => {
    getCases();
  }, [url]);

  return { loading, cases }
}