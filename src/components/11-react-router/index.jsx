import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Setup from '../10-propTypes';
import About from './about';
import ErrorPage from './error';
import Home from './home';

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>


        <Route exact path='/'> {/* Exact ensures this route is accessed if the path matches exaclty what is in the path property. */}
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <Setup />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      React Router
    </Router>
  )
}

export default ReactRouterSetup;