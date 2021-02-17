import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      position: "Header"
    }
  }
  render() {
    return (
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark sticky-top'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/people'>People</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;