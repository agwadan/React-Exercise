import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './index.css';
import Header from './components/Header';
import Books from './components/Books/Books';
import UseStateObject from './components/1-useState/UseStateObject';
import UseStateCounter from './components/1-useState/UseStateCounter';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {

    return (
      <div className='container'>
        <Header />
        <UseStateCounter />
     
      </div>

    );
  };
}

export default App;