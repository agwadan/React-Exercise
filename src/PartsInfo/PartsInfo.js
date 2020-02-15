import React from 'react';
import PartDetails from './PartDetails';

const PartsInfo = () => {
    return(
        <div>
            <PartDetails 
                details={{
                imgUrl:"img/Brakes1.jpg",
                name: "Brakes",
                brand:"Brembo Brakes",
                origin:"US"}}
                
            />
            <PartDetails 
                details={{name:"Brakes",
                imgUrl:"img/Brakes2.jpg" ,
                brand:"Rod Shop",
                origin:"US"}}
            />
            <PartDetails 
                details={{name:"Rims",
                imgUrl:"img/Rims1.jpeg",
                brand:"Roja",
                origin:"UK"}}
            />
            
        </div>
    )
}

export default PartsInfo