import React, { useMemo } from 'react';

import DefaultTemplate from 'components/templates/defaultPage/DefaultPage';
import ChartCard from 'components/molecules/chartCard/ChartCard';
import BarChart from 'components/atoms/barChart/BarChart';

const MainPage: React.FC = () => {
  const content = useMemo(() => {
    return <ChartCard title="Bar Chart Example" chart={<BarChart />} />;
  }, []);

  return <DefaultTemplate content={content} />;
};

export default MainPage;
