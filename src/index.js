import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>
);
