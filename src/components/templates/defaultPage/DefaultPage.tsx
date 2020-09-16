import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

import PageHeader from 'components/organisms/pageHeader/PageHeader';

const PageContent = styled.div`
  padding-top: 50px;
`;

interface DefaultTemplateProps {
  content: React.ReactNode;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
  content,
}: DefaultTemplateProps) => (
  <Container>
    <PageHeader />
    <PageContent>{content}</PageContent>
  </Container>
);

export default DefaultTemplate;
