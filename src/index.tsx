import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppContextProvider,
  MainGameContextProvider,
  StoryModeContextProvider,
} from 'shared/context';
import { GlobalStyle } from 'shared/styles';
import App from 'pages/App';

import 'index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <MainGameContextProvider>
        <StoryModeContextProvider>
          <GlobalStyle />
          <App />
        </StoryModeContextProvider>
      </MainGameContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
