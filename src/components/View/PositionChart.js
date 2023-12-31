import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "IDEA",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "MTRE",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "DFG",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "FEX",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "DFG",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "FGGH",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  
];

const PositionChart = () => {
  return (
    <BarChart
      width={500}
      height={250}
      data={data}
      fontSize={13}
      margin={{
        top: 20,
        right: 5,
        left: 5,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#E65555" />
      <Bar dataKey="uv" fill="#26AB5E" />
    </BarChart>
  );
}
export default PositionChart;
