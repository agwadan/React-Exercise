import React from 'react';
//import logo from './logo.svg';
//import './App.css';
/* import Header from './components/Header';
import ToDo from './components/ToDoList/ToDo';
import Footer from './components/Footer';
import TimeOfDay from './components/TimeOfDay';
import MainParts from './PartsInfo/MainParts'
import MainJokes from './components/Jokes/MainJokes';
import Counter from './components/Counter';
import MainCondition from './components/ConditionalRendering/MainCondition';
import ConditionalRenderingPractice from './components/ConditionalRenderingPractice'; */

import {Cards, Chart, CountryPicker} from './components/Covid19';
import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
import {fetchData} from './api';

class App extends React.Component {

  state = {
    data: {} //--------------------------------------------------- data object initialized to be filled with data fetched from he api.
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})//---------------------------- Filling the data object initialized inside state with the data fetched from the api.
  }

  render(){

    const {data} = this.state;//---------------------------------- Destructuring the data to be passed to the Cards component.

    return (
      <div className={styles.container}> 
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;