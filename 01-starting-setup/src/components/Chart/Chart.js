import "./Chart.css";
import ChartBars from "./ChartBars";

const Chart = (props) => {
  const valArray = props.dataPoints.map((x) => x.value);
  const totalMax = Math.max(...valArray);
  console.log(totalMax);

  return (
    <div className="chart">
      {props.dataPoints.map((x) => (
        <ChartBars
          key={x.label}
          value={x.value}
          maxVal={totalMax}
          label={x.label}
        />
      ))}
    </div>
  );
};

export default Chart;
