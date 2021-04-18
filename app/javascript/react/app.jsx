import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CleanWrapper } from '@layouts';
import { FourOFour } from '@pages';

const App = () => {
  const constraintsRef = useRef(null);

  return (
    <CleanWrapper innerRef={constraintsRef}>
      <Router>
        <Switch>
          <Route path="*">
            <FourOFour constraintsRef={constraintsRef} />
          </Route>
        </Switch>
      </Router>
    </CleanWrapper>
  );
};

export default App;
