import React from 'react';
import Typography from '@material-ui/core/Typography';

import DefaultTemplate from 'components/templates/defaultPage/DefaultPage';

const MainPage: React.FC = () => {
  const content = <Typography variant="h4">Main Page</Typography>;
  return <DefaultTemplate content={content} />;
};

export default MainPage;
