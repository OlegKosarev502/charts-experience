import React, { useMemo } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { container } from 'ioc.config';
import { IAuthService, authServiceToken } from 'services/auth/auth.interfaces';

const LogOutButton: React.FC = () => {
  const history = useHistory();

  const authService = useMemo(
    () => container.get<IAuthService>(authServiceToken),
    []
  );

  const onClick = () => {
    authService.logOut();
    history.push('/login');
  };

  return (
    <Button variant="outlined" color="primary" onClick={onClick}>
      Log Out
    </Button>
  );
};

export default LogOutButton;
