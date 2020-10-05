import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';

import { container } from 'ioc.config';
import {
  IThemeService,
  themeServiceToken,
} from 'services/theme/theme.interfaces';
import GlobalStyle from 'globalStyles';
import MainPage from 'components/pages/main/Main';

const App: React.FC = observer(() => {
  const themeService = useMemo(
    () => container.get<IThemeService>(themeServiceToken),
    []
  );

  return (
    <ThemeProvider theme={themeService.theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
});

export default App;
