import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BarChart,
  Bar,
  Tooltip,
  Legend
} from "recharts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  lineChartStyle: {
    backgroundColor: "#0e1726"
  },
  fontColor: {
    color: "#e0e6ed"
  }
});

const data = [
  { name: "Sun", Sales: 65, "Last Week": 68, amt: 2400 },
  { name: "Mon", Sales: 75, "Last Week": 68, amt: 2300 },
  { name: "Tue", Sales: 62, "Last Week": 55, amt: 2200 },
  { name: "Wed", Sales: 73, "Last Week": 78, amt: 2100 },
  { name: "Thu", Sales: 60, "Last Week": 55, amt: 2400 },
  { name: "Fri", Sales: 95, "Last Week": 70, amt: 2300 },
  { name: "Sat", Sales: 60, "Last Week": 90, amt: 2200 }
];

export default function DailySalesChart() {
  const classes = useStyles();

  return (
    <Card className={classes.lineChartStyle}>
      <CardContent>
        <Typography className={classes.fontColor} variant="h5" gutterBottom>
          Daily Sales
        </Typography>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <Tooltip />
          <Legend wrapperStyle={{ color:"#ffffff" ,margin:8}} />
          <Bar dataKey="Last Week" stackId="a" fill="#8884d8" />
          <Bar dataKey="Sales" stackId="a" fill="#82ca9d" />
        </BarChart>
      </CardContent>
    </Card>
  );
}
