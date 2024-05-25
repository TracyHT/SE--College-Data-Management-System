import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: [],
  datasets: [
    {
      label: "Total Credits",
      data: [12, 19, 3, 12, 12],
      backgroundColor: ["#022081", "#3D8BFD", "#DEE2E6", "#9747FF", "#18D1F9"],
      borderWidth: 1,
    },
  ],
};
const plugins = [
  {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 190).toFixed(2);
      ctx.font =  fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var textLine1 = "100/150",
        textLine2 = "Finished",
        textX = Math.round((width - ctx.measureText(textLine1).width) / 2),
        textY = height / 2;

      ctx.fillText(
        textLine1,
        textX,
        textY -
          ctx.measureText(textLine1).actualBoundingBoxAscent -
          ctx.measureText(textLine1).actualBoundingBoxDescent
      );

      ctx.fillText(
        textLine2,
        textX,
        textY +
          ctx.measureText(textLine1).actualBoundingBoxAscent +
          ctx.measureText(textLine2).actualBoundingBoxDescent
      );

      ctx.save();
    },
  },
];
export const options = {
  legend: {
    display: false,
  },
  responsive: true,
};
export default function ChartTotalCredits() {
  return <Doughnut data={data} options={options} plugins={plugins} />;
}
