import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { BarChartData } from './data';

const BarChart: React.FC = () => (
  <ResponsiveBar
    maxValue={100}
    data={BarChartData}
    keys={['Angular', 'React', 'Vue']}
    indexBy="framework"
    margin={{ top: 25, right: 50, bottom: 100, left: 60 }}
    padding={0.3}
    colors={{ scheme: 'set1' }}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Framework',
      legendPosition: 'middle',
      legendOffset: 48,
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Repos',
      legendPosition: 'middle',
      legendOffset: -42,
      format: (value) => `${value}%`,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-left',
        direction: 'row',
        justify: false,
        translateX: -25,
        translateY: 100,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    theme={{
      background: '#fff',
    }}
  />
);

export default BarChart;
