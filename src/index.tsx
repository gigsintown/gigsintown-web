import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './normalizeStyles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from './styledComponents';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
