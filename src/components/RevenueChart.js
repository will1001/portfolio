import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
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
  { name: "Jan", uv: 6.5, pv: 6.8, amt: 2400 },
  { name: "Feb", uv: 7.5, pv: 6.8, amt: 2300 },
  { name: "Mar", uv: 6.2, pv: 5.5, amt: 2200 },
  { name: "Apr", uv: 7.3, pv: 7.8, amt: 2100 },
  { name: "May", uv: 6, pv: 5.5, amt: 2400 },
  { name: "Jun", uv: 9.5, pv: 7, amt: 2300 },
  { name: "Jul", uv: 6, pv: 9, amt: 2200 },
  { name: "Aug", uv: 7, pv: 6, amt: 2100 },
  { name: "Sep", uv: 6, pv: 5, amt: 2400 },
  { name: "Oct", uv: 9, pv: 7, amt: 2300 },
  { name: "Nov", uv: 8, pv: 4, amt: 2200 },
  { name: "Dec", uv: 9, pv: 7, amt: 2100 }
];

export default function RevenueChart() {
  const classes = useStyles();

  return (
    <Card className={classes.lineChartStyle}>
      <CardContent>
        <Typography
          className={classes.fontColor}
          color="inherit"
          variant="h5"
          gutterBottom
        >
          Revenue
        </Typography>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <XAxis dataKey="name" stroke="#e0e6ed" />
          <YAxis stroke="#e0e6ed" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="rgb(27, 85, 226)"
            fill="rgb(27, 85, 226,.2)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="rgb(231, 81, 90)"
            fill="rgb(231, 81, 90,.2)"
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
}
