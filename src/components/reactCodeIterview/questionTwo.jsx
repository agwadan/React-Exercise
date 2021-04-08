import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const QuestionTwo = () => {

  const [randomDataJSON, setRandomDataJSON] = useState('');
  const [userInfo, setUserInfo] = useState([]);

  const fetchData = () => {

    /*  return fetch('https://randomuser.me/api')
       .then(response => response.json())
       .then((data) => {
         console.log(data);
         return JSON.stringify(data, null, 2);
       }) */

    return axios.get('https://randomuser.me/api')
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchData().then(randomData => {
      setRandomDataJSON(JSON.stringify(randomData, null, 2) || 'no data');
      setUserInfo(randomData.results);
    })
  }, []);

  /*  const getUserFullName = (userInfo) => {
     const { name: { first: last } } = userInfo;
     return `${first} ${last}`;
   } */

  return (
    <div>
      <h2>Question 2</h2>
      <h5>Fetch data from the provided api, and display it as a string.</h5>
      <p>_______________</p>
      <button onClick={() => fetchData()}>Fetch Random Data</button>
      {/* {
        userInfo.map((user, idx) => {
          <p>{getUserFullName(userInfo)}</p>
        })
      } */}
      <pre>{randomDataJSON}</pre>{/* Pre tag makes the json data look pretty */}
    </div>
  )
}
