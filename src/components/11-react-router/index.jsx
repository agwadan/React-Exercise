import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Setup from '../10-propTypes';
import About from './about';
import Home from './home';

const ReactRouterSetup = () => {
  return (
    <Router>
      <Route exact path='/'> {/* Exact ensures this route is accessed if the path matches exaclty what is in the path property. */}
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/people'>
        <Setup />
      </Route>
      React Router
    </Router>
  )
}

export default ReactRouterSetup;