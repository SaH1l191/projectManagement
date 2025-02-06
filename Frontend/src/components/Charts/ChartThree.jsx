import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 8267 },
  { name: "Group C", value: 678 },
  { name: "Group D", value: 1000 },
  { name: "Group E", value: 1008 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF6384",
  "#36A2EB",
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data02}
            cx={90}
            cy={100}
            innerRadius={50}
            outerRadius={80}
          >
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
