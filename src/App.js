import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './index.css';
import './App.css';
import Header from './components/Header.jsx';
import ControlledInputs from './components/4-forms/ControlledInputs';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {

    return (
      <div className='container'>
        <Header />
        <ControlledInputs />
      </div>

    );
  };
}

export default App;