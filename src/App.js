import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './index.css';
import Header from './components/Header';
import Books from './components/Books/Books';
import UseStateBasics from './components/1-useState/useStateBasics';
import UseStateArray from './components/1-useState/UseStateArray';

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