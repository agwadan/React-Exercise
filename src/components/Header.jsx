import React from 'react';

class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            position: "Header"
        }
    }
    render(){
    return (
        <header className="navbar">
            This is my {this.state.position}.
        </header>
    )}
}

export default Header   