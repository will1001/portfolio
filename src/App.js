import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import RevenueChart from "./components/RevenueChart";
import DailySalesChart from "./components/DailySalesChart";
import AccountInfo from "./components/AccountInfo";
import RecentOrders from "./components/RecentOrders";

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
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.root}>
          <Navbar />
          <div className={classes.bodyContent}>
            <Switch>
              <Route path="/Chat">
                <h1>Chat</h1>
              </Route>
              <Route path="/Notes">
                <h1>Notes</h1>
              </Route>
              <Route path="/">
                <RevenueChart />
                <br />
                <DailySalesChart />
                <br />
                <AccountInfo />
                <br />
                <RecentOrders />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
