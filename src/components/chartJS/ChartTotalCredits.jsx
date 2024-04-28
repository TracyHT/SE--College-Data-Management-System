import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
  export const data = {
    labels: [],
    datasets: [
      {
        label: 'Total Credits',
        data: [12, 19, 3,12 ,12],
        backgroundColor: [
          '#022081',
          '#3D8BFD',
          '#DEE2E6',
          '#9747FF',
          '#18D1F9'
        ],
        borderWidth: 1,
      },
    ],
  };
  export const options = {
    legend : {
        display:  false
    }
};
export default function ChartTotalCredits(){
   
    return <Doughnut data={data} options={options} />;
}