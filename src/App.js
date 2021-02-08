import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import './App.css';
import Header from './components/Header.jsx';
import Setup from './components/11-react-router';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <Setup />
      </div>

    );
  };
}

export default App;