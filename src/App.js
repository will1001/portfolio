import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import RevenueChart from "./components/RevenueChart";
import DailySalesChart from "./components/DailySalesChart";

const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: "#060818"
  },
  bodyContent: {
    margin: "84px 13px"
  }
});

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <div className={classes.bodyContent}>
          <RevenueChart />
          <DailySalesChart />
        </div>
      </div>
    </>
  );
}

export default App;
