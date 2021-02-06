import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import './App.css';
import Header from './components/Header.jsx';
import UseStateCounter from './components/1-useState/useStateCounter';
import UseStateBasics from './components/1-useState/useStateBasics';
import UseStateArray from './components/1-useState/useStateArray';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <UseStateArray />
      </div>

    );
  };
}

export default App;