import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import ToDo from './components/ToDoList/ToDo';
import Footer from './components/Footer';
import TimeOfDay from './components/TimeOfDay';
import MainParts from './PartsInfo/MainParts'
import MainJokes from './components/Jokes/MainJokes';
import Counter from './components/Counter';
import MainCondition from './components/ConditionalRendering/MainCondition';
import ConditionalRenderingPractice from './components/ConditionalRenderingPractice'; 
import Book from './components/Book';

import styles from './App.module.css'; //----------------------------------------------------- Styling for the app.
class App extends React.Component {

  render(){

   return(
     <div>
       <Header />
       <Book title='Men are from Mars and Women are from Venus.'/>
       <Book title='Two and A half Men'/>
       <Book />
     </div>
     
   );
};
}

export default App;