import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './index.css';
import Header from './components/Header';
import UseEffectBasics from './components/2-useEffect/UseEffectBasics';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {

    return (
      <div className='container'>
        <Header />
        <UseEffectBasics />
     
      </div>

    );
  };
}

export default App;