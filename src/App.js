import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import './App.css';
import Header from './components/Header.jsx';
import UseRefBasics from './components/5-useRef/UseRefBasics';

//import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render() {

    return (
      <div className='container'>
        <Header />
        <UseRefBasics />
      </div>

    );
  };
}

export default App;