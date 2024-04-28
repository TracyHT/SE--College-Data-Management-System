import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ['1st 2021', '2st 2021', '1st 2022', '2st 2022', '1st 2023', '2st 2023', '1st 2024','2st 2024','1st 2025','2st 2025'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' ,
      label: 'GPA Per Semester',
      borderColor: '#28A745',
      borderWidth: 2,
      fill: false,
      data:[1,3.4,3.7,7,6,3,5,3,5,2],
    },
    {
      type: 'line' ,
      label: 'Cumulative GPA',
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: '#3D8BFD',
      borderWidth: 2,
      fill: false,
      data:[1,3.4,3.4,7,9,7,2,1,5,1],
    },
  ],
};

export default function ChartLineGPACGPA() {
  return <Chart type='line' data={data} />;
}
