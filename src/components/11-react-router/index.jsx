import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';

const ReactRouterSetup = () => {
  return (
    <Router>
      <Route path='/'>
        <Home />
      </Route>
      React Router
    </Router>
  )
}

export default ReactRouterSetup;