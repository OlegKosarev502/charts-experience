import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export enum Units {
  Numeric = 'numeric',
  Percentage = 'percentage',
}

interface ChartTooltipProps {
  indexValue: number | string;
  value: number | string;
  units?: Units;
}

const TooltipContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 6px;
`;

const ChartTooltip: React.FC<ChartTooltipProps> = ({
  indexValue,
  value,
  units,
}: ChartTooltipProps) => (
  <TooltipContent>
    <Typography variant="body2">{`${indexValue}:`}</Typography>
    <Typography variant="body2">{`${value}${
      units === Units.Percentage ? '%' : ''
    }`}</Typography>
  </TooltipContent>
);

export default ChartTooltip;
