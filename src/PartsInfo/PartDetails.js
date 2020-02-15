import React from 'react'

function PartDetails (props)  {
  console.log(props)
    return (
        
            <div className="part-card">
            <img src={props.details.imgUrl} alt="product"/>
            <h3>Title: {props.details.name} </h3>
            <p>Brand: {props.details.brand}  </p>
            <p>Origin: {props.details.origin} </p>
        </div>
        
    )
}

export default PartDetails
