import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

const Charts = () => {
  const [chartData, setChartData] = useState([]);

  const apiData = [
    { labels: ['Red', 'Blue', 'Yellow'], data: [16, 15, 25] },
    { labels: ['Green', 'Purple', 'Orange'], data: [23, 34, 56] },
    { labels: ['Cyan', 'Magenta', 'Lime' , 'white'], data: [23, 65, 21 , 34] },
    { labels: ['Black', 'White'], data: [16, 15] }
  ];

  useEffect(() => {
    // Register required Chart.js components
    Chart.register(ArcElement, Tooltip, Legend);

    const formattedData = apiData.map(({ labels, data }, index) => ({
      datasets: [
        {
          label: `Chart ${index + 1}`,
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1,
        },
      ],
      labels: labels
    }));

    setChartData(formattedData);
  }, []);

  return (
    <div className='container'>
      <div className='row gy-4'>
        {chartData.map((data, index) => (
          <div className='col-md-3' key={index}>
            <h2>Chart {index + 1}</h2>
            <Pie data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
