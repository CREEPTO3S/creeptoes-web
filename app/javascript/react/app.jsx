import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CleanWrapper } from '@layouts';
import { FourOFour } from '@pages';
import { DarkMode } from '@vendors';

const App = () => {
  const constraintsRef = useRef(null);

  useEffect(() => {
    DarkMode.init();
  }, []);

  return (
    <CleanWrapper innerRef={constraintsRef}>
      <Router>
        <Switch>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </CleanWrapper>
  );
};

export default App;
