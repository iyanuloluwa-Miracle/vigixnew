import React from 'react';
import { Line } from 'react-chartjs-2';
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
  },
};

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Nov',
  'Dec',
];

const labels2 = ['Users', 'Reports', 'Recoveries', 'Admin Members'];

export const data = {
  labels,
  datasets: [
    {
      label: 'users',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 100 })),
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
      data: ['55', '25', '10', '10'],
      borderColor: ['#F6C789', '#FFA500', '#FFC0CB', '#F36D56'],
      backgroundColor: ['#F6C789', '#FFA500', '#FFC0CB', '#F36D56'],
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
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
              <div className="d-flex">
                <div className="box" style={{ backgroundColor: '#F6C789' }} />
                <p>Users</p>
              </div>
              <div className="d-flex">
                <div className="box" style={{ backgroundColor: '#FFA500' }} />
                <p>Recoveries</p>
              </div>
              <div className="d-flex">
                <div className="box" style={{ backgroundColor: '#FFC0CB' }} />
                <p>Reports</p>
              </div>
              <div className="d-flex">
                <div className="box" style={{ backgroundColor: '#F36D56' }} />
                <p>Admin Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
