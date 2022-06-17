import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from 'shared/context';
import { GlobalStyle } from 'shared/styles';
import App from 'pages/App';

import 'index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <GlobalStyle />
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
