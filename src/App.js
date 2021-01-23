import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './index.css';
import Header from './components/Header';
import UseEffectCleanUp from './components/2-useEffect/UseEffectCleanUp';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {

    return (
      <div className='container'>
        <Header />
        <UseEffectCleanUp />
     
      </div>

    );
  };
}

export default App;