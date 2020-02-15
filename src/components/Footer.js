import React from 'react';

const  Footer = () => {

    const firstName = "Daniel";
    const lastName = "Agwa"

    return (
    <footer className="footer">
        <h3>
            This is my footer element.
        </h3> 
        <p> <br></br>Written by {`${firstName} ${lastName}`}</p>
    </footer>
    )
}

export default Footer