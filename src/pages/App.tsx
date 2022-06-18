import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import StoryMode from 'pages/StoryMode';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/it-stings">
          <StoryMode />
        </Route>
        <Route>
          <Redirect to="/it-stings" />
        </Route>
      </Switch>
    </Router>
  );
}
