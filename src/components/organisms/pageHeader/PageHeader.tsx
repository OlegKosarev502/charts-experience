import React from 'react';
import styled from 'styled-components';

import ThemeSwitch from 'components/atoms/themeSwitch/ThemeSwitch';
import LogOutButton from 'components/atoms/logOutButton/logOutButton';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: flex-end;
  gap: 32px;
  padding-top: 12px;
`;

const PageHeader: React.FC = () => (
  <StyledWrapper>
    <ThemeSwitch />
    <LogOutButton />
  </StyledWrapper>
);

export default PageHeader;
