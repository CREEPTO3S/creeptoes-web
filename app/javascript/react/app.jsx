import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FourOFour } from '@pages';

const App = () => (
  <Router>
    <Switch>
      <Route path="*">
        <FourOFour />
      </Route>
    </Switch>
  </Router>
);

export default App;
