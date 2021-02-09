import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
//import Nav from './components/navbar.jsx';
import ReactRouterSetup from './components/11-react-router';
class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <ReactRouterSetup />
      </div>

    );
  };
}

export default App;