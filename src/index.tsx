import React from 'react';
import ReactDOM from 'react-dom';
import { AppContextProvider, StoryModeContextProvider } from 'shared/context';
import { GlobalStyle } from 'shared/styles';
import App from 'pages/App';

import 'index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <StoryModeContextProvider>
        <GlobalStyle />
        <App />
      </StoryModeContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
