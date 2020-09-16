import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';

import { themeService } from 'services/theme/theme';
import GlobalStyle from './globalStyles';
import MainPage from 'components/pages/main/Main';

const App: React.FC = observer(() => (
  <ThemeProvider theme={themeService.theme}>
    <GlobalStyle />
    <MainPage />
  </ThemeProvider>
));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
