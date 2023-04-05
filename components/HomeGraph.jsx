import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Skeleton } from 'antd';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  SubTitle,
} from 'chart.js';
import { faker } from '@faker-js/faker';
import PieChart from './PieChart';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Colors,
  Title,
  Tooltip,
  Legend,
  SubTitle
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false, //the legend should not show?
      subtitle: {
        display: true,
        text: 'Custom Chart Subtitle',
      },
    },
    title: {
      display: false, //the title should not show?
      text: 'Report',
      position: 'bottom',
    },
    tooltip: {
      backgroundColor: '#7D0003',
      padding: 10,
      cornerRadius: 4,
      // displayColors: false,
      // yAlign: 'bottom',
    },
  },

  elements: {
    line: {
      tension: 0.4, // smooth lines
    },
  },

  scales: {
    y: {
      grid: {
        display: true,
        color: '#ECECEC',
      },
      border: {
        dash: [3, 3],
      },
    },
    x: {
      grid: {
        display: false,
      },
      border: {
        dash: [2, 4],
      },
    },
  },
};

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',

      display: false, //the legend should not show?
      // labels: {
      //   usePointStyle: true,
      //   boxWidth: 6,
      // },
    },
    title: {
      display: false, //the title should not show?
      text: 'Report',
      position: 'bottom',
    },
    datalabels: {
      anchor: 'end',
      align: 'top',
      formatter: value => {
        return '$' + value;
      },
    },
  },
  // plugins: [ChartDataLabels]
};

const labels = [
  'Jan 2022',
  'Feb 2022',
  'Mar 2022',
  'Apr  2022',
  'May  2022',
  'Jun 2022',
  'Jul 2022',
  'Aug 2022',
  'Sep 2022',
  'Nov 2022',
  'Dec 2022',
];

const labels2 = [
  'Awaiting confirmation',
  'Approved',
  'Declined',
  'Failed',
  'Initiated',
  'Processed',
];

const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  plugins: {
    datalabels: {
      formatter: '10%',
      color: '#fff',
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: 'users',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 1000000 })),
      borderColor: '#ED9013',
      backgroundColor: '#ED9013',
    },
  ],
};

export const data2 = {
  labels: labels2,
  datasets: [
    {
      label: 'Dataset 1',
      data: ['35', '15', '10', '20', '10', '15'],
      borderColor: [
        '#F6C789',
        '#009600',
        '#FF2000',
        '#7D0003',
        '#967500',
        '#9747FF',
      ],
      backgroundColor: [
        '#F6C789',
        '#009600',
        '#FF2000',
        '#7D0003',
        '#967500',
        '#9747FF',
      ],
      // backgroundColor: ['#F6C789', '#A8C61B', '#6412CE', '#006CB6'],
    },
  ],
};

export default function HomeGraph() {
  const [isLoading, setIsLoading] = useState(true);

  setInterval(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div className="container">
      <div className="home-graph">
        <div className="row gap-4">
          <div className="col-lg line-wrapper line-chart">
            <h4 className="our-h4">Reports</h4>
            <p>
              This is a graphical representation of reports that changes over a
              period of time. It is a chart made by joining point using line
              segments.{' '}
            </p>
            {!isLoading ? (
              <Line data={data} options={options} />
            ) : (
              <Skeleton active paragraph={20} />
            )}
          </div>
          <div className="col-lg-auto line-wrapper pie-chart">
            <h4 className="our-h4">Pie Charts</h4>
            <div className="d-flex justify-content-center ">
              {!isLoading ? (
                <PieChart chartData={data2} chartOptions={options2} />
              ) : (
                <Skeleton active paragraph={20} />
              )}
            </div>

            <div className="legends">
              <div className="d-flex" style={{ width: '60%' }}>
                <div className="box" style={{ backgroundColor: '#FF7700' }} />
                <p>Awaiting confirmation</p>
              </div>
              <div className="d-flex" style={{ width: '40%' }}>
                <div className="box" style={{ backgroundColor: '#009600' }} />
                <p>Approved</p>
              </div>
              <div className="d-flex" style={{ width: '60%' }}>
                <div className="box" style={{ backgroundColor: '#FF2000' }} />
                <p>Declined</p>
              </div>
              <div className="d-flex" style={{ width: '40%' }}>
                <div className="box" style={{ backgroundColor: '#7D0003' }} />
                <p>Failed</p>
              </div>
              <div className="d-flex" style={{ width: '60%' }}>
                <div className="box" style={{ backgroundColor: '#967500' }} />
                <p>Initiated</p>
              </div>
              <div className="d-flex" style={{ width: '40%' }}>
                <div className="box" style={{ backgroundColor: '#9747FF' }} />
                <p>Processed</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <Pie data={pieData} options={{ plugins: pieOptions.plugins }} /> */}
        </div>
      </div>
    </div>
  );
}
