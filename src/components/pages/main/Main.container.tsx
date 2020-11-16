import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, Redirect } from 'react-router-dom';

import { container } from 'ioc.config';
import { IAuthService, authServiceToken } from 'services/auth/auth.interfaces';
import MainPage from 'components/pages/main/Main';

const MainPageContainer: React.FC = observer(() => {
  const authService = useMemo(
    () => container.get<IAuthService>(authServiceToken),
    []
  );

  return (
    <Route
      render={() =>
        authService.isAuthenticated ? <MainPage /> : <Redirect to="/login" />
      }
    />
  );
});

export default MainPageContainer;
