import React from 'react'

function PartDetails (props)  {
  console.log(props)
    return (
        
            <div className="part-card">
            <img src={props.imgUrl} alt="product"/>
            <h3>Title: {props.name} </h3>
            <p>Brand: {props.brand}  </p>
            <p>Origin: {props.origin} </p>
        </div>
        
    )
}

export default PartDetails
