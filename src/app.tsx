import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { container } from 'ioc.config';
import {
  IThemeService,
  themeServiceToken,
} from 'services/theme/theme.interfaces';
import GlobalStyle from 'globalStyles';
import MainPageContainer from 'components/pages/main/Main.container';
import LoginPage from 'components/pages/login/Login';
import SignUpPage from 'components/pages/signup/SignUp';

const App: React.FC = observer(() => {
  const themeService = useMemo(
    () => container.get<IThemeService>(themeServiceToken),
    []
  );

  return (
    <ThemeProvider theme={themeService.theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path="/" component={MainPageContainer} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
