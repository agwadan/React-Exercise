import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import ToDo from './components/ToDoList/ToDo';
import Footer from './components/Footer';
import TimeOfDay from './components/TimeOfDay';
import MainParts from './PartsInfo/MainParts'
import MainJokes from './components/Jokes/MainJokes';


function App() {
  return (
    <div>
      <Header/>
      <MainParts />
      
      <Footer/>
    </div>
   
  );
}

export default App;


//The commented code below is the default contents for App.js

 /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */