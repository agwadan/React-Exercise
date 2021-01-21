import React from 'react';
import { presenters } from './Presenters';

const UseStateArray = () => {

  const [nominees, setNominees] = React.useState(presenters);
  
  return (
    <React.Fragment>
      {
        nominees.map((nominee)=>{
          const {id, title} = nominee;
          return(<h4 key={id}>{title}</h4>)
        })
      }
      
    </React.Fragment>
  )
}

export default UseStateArray;