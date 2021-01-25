import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './index.css';
import './App.css';
import Header from './components/Header.jsx';
import MultipleReturns from './components/3-conditionalRendering/MultipleReturns';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {

    return (
      <div className='container'>
        <Header />
        <MultipleReturns/>
      </div>

    );
  };
}

export default App;