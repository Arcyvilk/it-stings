import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import StoryMode from 'pages/StoryMode';

import 'react-toastify/dist/ReactToastify.css';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/it-stings">
          <StoryMode />
          <ToastContainer />
        </Route>
        <Route>
          <Redirect to="/it-stings" />
        </Route>
      </Switch>
    </Router>
  );
}
