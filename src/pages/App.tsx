import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppContext } from 'shared/context';
import { MainWrapper } from 'containers';

import MainGame from 'pages/MainGame';
import StoryMode from 'pages/StoryMode';

export const APP_NAME = 'it-stings';

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
          <Route exact path={`/${APP_NAME}`}>
            <MainGame />
          </Route>
          <Route exact path={`/${APP_NAME}/story`}>
            <StoryMode />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
}
