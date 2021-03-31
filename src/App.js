import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
//import Nav from './components/navbar.jsx';
/* import ReactRouterSetup from './components/11-react-router';
import MemoIndex from './components/12-memoUseMemoUseCallback';
import ErrorExample from './components/1-useState/errorExample';
import IndexPage from './components/13-stylingWithCss'; */
import { ContentPage } from './components/13-stylingWithCss/contentPage';
class App extends React.Component {

  render() {
    return (
      <div /* className='container' */>
        <ContentPage />
      </div>

    );
  };
}

export default App;