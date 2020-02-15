import React from 'react';

const  Footer = () => {

    /* const numbers = [1,2,3,4];
    const tripled = numbers.map(function(num){
        return num * 3;
    })
    console.log(tripled) */

    const firstName = "Daniel";
    const lastName = "Agwa"

    return (
    <footer className="footer">
        <h3>
            This is my footer element.
        </h3> 
        
    <p>Written by {`${firstName} ${lastName}`}</p>
    </footer>
    )
}

export default Footer