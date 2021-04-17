import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CleanWrapper } from '@layouts';
import { Login, FourOFour } from '@pages';

const App = () => {
  const constraintsRef = useRef(null);

  return (
    <CleanWrapper innerRef={constraintsRef}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login constraintsRef={constraintsRef} />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </CleanWrapper>
  );
};

export default App;
