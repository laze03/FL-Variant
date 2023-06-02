import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0073e6",
  "#000055",
  "#FF6347",
  "#800080",
  "#3399FF",
  "#32CD32",
  "#FF69B4",
  "#FFA07A",
  "#FFD700",
  "#00FFFF",
  "#FF00FF",
  "#FFDAB9",
  "#9370DB",
  "#FF6500",
  "#40E0D0",
  "#FF8C00",
  "#FF1493",
  "#00FF7F",
  "#FFB6C1",
  "#FF0000",
  "#FF6347",
  "#FF69B4",
  "#00BFFF",
  "#FF6347",
  "#32CD32",
  "#9400D3",
  "#0000FF",
  "#000033",
  "#003366",
  "#0066CC",
];

export default function StackedBarChartComponent(props) {
  return (
    <BarChart
      width={500}
      height={350}
      data={props.data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3 3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {props.dataKeys.map((entry, index) => {
        return (
          <Bar
            dataKey={props.dataKeys[index]}
            stackId="a"
            fill={COLORS[index]}
          />
        );
      })}
    </BarChart>
  );
}
