import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const QuestionTwo = () => {

  const [randomDataJSON, setRandomDataJSON] = useState('');

  useEffect(() => {
    fetchData().then(randomData => {
      setRandomDataJSON(randomData || 'no data');
    })
  }, []);

  const fetchData = () => {
    return axios.get('https://randomuser.me/api')
      .then(({ data }) => {
        console.log(data);
        return JSON.stringify(data, null, 2);
      })
      .catch(err => console.log(err))
  };

  return (
    <div>
      <h2>Question 2</h2>
      <h5>Fetch data from the provided api, and display it as a string.</h5>
      <p>_______________</p>
      <button onClick={() => fetchData()}>Fetch Random Data</button>
      <pre>{randomDataJSON}</pre>{/* Pre tag makes the json data look pretty */}
    </div>
  )
}
