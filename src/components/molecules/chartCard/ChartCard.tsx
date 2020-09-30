import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledChartCard = styled.div`
  padding: 12px 0 20px;
  border-radius: 12px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const StyledChartName = styled(Typography)`
  padding: 0 30px;
  color: rgb(74, 74, 74);
`;

const ChartContainer = styled.div`
  height: 400px;
`;

interface ChartCardProps {
  title: string;
  chart: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  chart,
}: ChartCardProps) => (
  <StyledChartCard>
    <StyledChartName>{title}</StyledChartName>
    <ChartContainer>{chart}</ChartContainer>
  </StyledChartCard>
);

export default ChartCard;
