import React, { useState, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { container } from 'ioc.config';
import { IAuthService, authServiceToken } from 'services/auth/auth.interfaces';

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Section = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
`;

const SignUpPage: React.FC = observer(() => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const authService = useMemo(
    () => container.get<IAuthService>(authServiceToken),
    []
  );

  const signUp = async () => {
    setIsLoading(true);
    await authService.signUp({ name, email, password });
    history.push('/login');
  };

  if (isLoading) {
    return (
      <FormContainer>
        <CircularProgress color="primary" />
      </FormContainer>
    );
  }

  if (authService.isAuthenticated) {
    history.push('/');
  }

  return (
    <FormContainer>
      <Form>
        <Section>
          <TextField
            label="Name"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          />
          <TextField
            label="Email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            autoComplete="test-2@network.com"
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            autoComplete="password-2"
          />
        </Section>
        <Button variant="contained" color="primary" onClick={signUp}>
          Sign up
        </Button>
      </Form>
    </FormContainer>
  );
});

export default SignUpPage;
