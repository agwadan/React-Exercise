import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './index.css';
import './App.css';
import Header from './components/Header.jsx';
import ShortCircuit from './components/3-conditionalRendering/ShortCircuit';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {

    return (
      <div className='container'>
        <Header />
        <ShortCircuit/>
      </div>

    );
  };
}

export default App;