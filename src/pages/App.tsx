import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from 'pages/Main';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/it-stings">
          <Main />
        </Route>
        <Route>
          <Redirect to="/it-stings" />
        </Route>
      </Switch>
    </Router>
  );
}
