import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  Tooltip,
  LabelList,
} from "recharts";

const COLORS = [
  "#0073e6",
  "#000066",
  "#FF6347",
  "#3399FF",
  "#800080",
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
  "#003366",
  "#0066CC",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {percent > 0.05 && `${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

export default function PieChartComponent(props) {
  const data = props.data;
  return (
    <PieChart width={props.width ? props.width : 500} height={props.height}>
      <Tooltip />
      <Legend />
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={props.radius ? props.radius : 200}
      >
        {props.data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        {props.labelList && (
          <LabelList
            className="textspan"
            dataKey={props.datakey}
            position="outside"
            fill={"#002b99"}
          />
        )}
      </Pie>
    </PieChart>
  );
}
