import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import './App.css';
import Header from './components/Header.jsx';
import ContextAPI from './components/8-useContext/ContextAPI';
import ErrorExample from './components/1-useState/errorExample';
import UseStateArray from './components/1-useState/UseStateArray';
import UseStateBasics from './components/1-useState/useStateBasics';
import UseStateCounter from './components/1-useState/UseStateCounter';
import UseStateObject from './components/1-useState/UseStateObject';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <UseStateObject />
      </div>

    );
  };
}

export default App;