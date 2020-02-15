import React from 'react';

class  Footer extends React.Component {

    constructor(){
        super()
        this.state = {
            firstName: "Agwa",
            lastName: "Daniel",
            finalName: "Abraham"
        }
    }

    render()
{

    return (
    <footer className="footer">
        <h3>
            This is my footer element.
        </h3> 
        
    <p>Written by {`${this.state.firstName} ${this.state.lastName} ${this.state.finalName}`}</p>
    </footer>
    )}
}

export default Footer