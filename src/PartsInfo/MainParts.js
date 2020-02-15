import React from 'react';
import PartDetails from './PartDetails';
import partsData from './partsData';

const MainParts = () => {

    const partsComponents = partsData.map( (part) => {
        return(
        <PartDetails
            key={part.id}
            imgUrl={part.imgUrl}
            name={part.name}
            brand={part.brand}
            origin={part.origin}
 
        />)
    })
    return(
        <div>
            {partsComponents}
        </div>
    )
}

export default MainParts