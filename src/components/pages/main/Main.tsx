import React from 'react';
import styled from 'styled-components';

import ThemeSwitch from '../../atoms/themeSwitch/ThemeSwitch';

const StyledMainPage = styled.div`
  margin: 12px 0 0 12px;
`;

const MainPage: React.FC = () => (
  <StyledMainPage>
    <ThemeSwitch />
  </StyledMainPage>
);

export default MainPage;
