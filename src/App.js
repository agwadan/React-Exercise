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
    data: {}, //--------------------------------------------------- data object initialized to be filled with data fetched from the api.
    country: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData}) //---------------------------- Filling the data object initialized inside state with the data fetched from the api.
  }

  /* Function to handle change when a different country is picked. */
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
                    data: fetchedData,
                    country: country}); //------------------------ Assigning fetched data for the specified country to the state.
  }

  render(){

    const {data, country} = this.state;//---------------------------------- Destructuring the data and to be passed to the Cards and chart components.

    return (
      <div className={styles.container}> 
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;