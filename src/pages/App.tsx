import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppContext } from 'shared/context';
import { MainWrapper } from 'containers';

import MainGame from 'pages/MainGame';
import StoryMode from 'pages/StoryMode';

export default function App(): JSX.Element {
  const { theme, themeType } = useAppContext();

  return (
    <MainWrapper theme={theme}>
      <ToastContainer
        theme={themeType}
        autoClose={3000}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
      />
      <Router>
        <Switch>
          <Route exact path="/it-stings">
            <MainGame />
          </Route>
          <Route exact path="/it-stings/story">
            <StoryMode />
          </Route>
          <Route>
            <Redirect to="/it-stings" />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
}
