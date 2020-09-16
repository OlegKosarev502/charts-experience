import React from 'react';
import styled from 'styled-components';

import ThemeSwitch from 'components/atoms/themeSwitch/ThemeSwitch';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
`;

const PageHeader: React.FC = () => (
  <StyledWrapper>
    <ThemeSwitch />
  </StyledWrapper>
);

export default PageHeader;
