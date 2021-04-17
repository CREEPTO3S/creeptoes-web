import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, FourOFour } from '@pages';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="*">
        <FourOFour />
      </Route>
    </Switch>
  </Router>
);

export default App;
