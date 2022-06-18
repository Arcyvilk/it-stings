import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useAppContext } from 'shared/context';
import StoryMode from 'pages/StoryMode';

import 'react-toastify/dist/ReactToastify.css';

export default function App(): JSX.Element {
  const { themeType } = useAppContext();
  return (
    <Router>
      <Switch>
        <Route exact path="/it-stings">
          <StoryMode />
          <ToastContainer
            theme={themeType}
            autoClose={3000}
            hideProgressBar={false}
            pauseOnFocusLoss={false}
          />
        </Route>
        <Route>
          <Redirect to="/it-stings" />
        </Route>
      </Switch>
    </Router>
  );
}
