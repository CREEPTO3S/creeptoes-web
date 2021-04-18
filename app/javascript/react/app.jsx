import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CleanWrapper } from '@layouts';

const App = () => {
  const constraintsRef = useRef(null);

  return (
    <CleanWrapper innerRef={constraintsRef}>
      <Router>
        <Switch>
          <Route path="*">
            <h1>{window.location.pathname}</h1>
          </Route>
        </Switch>
      </Router>
    </CleanWrapper>
  );
};

export default App;
