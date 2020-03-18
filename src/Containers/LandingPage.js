import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Dashboards from "./Dashboards";
// import TodoList from "./TodoList";

const useStyles = makeStyles({
  bodyContent: {
    margin: "84px 13px",
  }
});

export default function LandingPage() {
  const classes = useStyles();
  const ListMenu = useSelector(state => state.drawerListMenu.listMenu);
  return (
    <BrowserRouter>
        <Navbar />
        <div className={classes.bodyContent}>
          <Switch>
            <Route path="/" exact component={Dashboards} />
            {ListMenu.map(list =>
              list.subMenu.length === 0 ? (
                <Route
                  key={list.idKey}
                  path={list.routerLink}
                  component={list.component}
                />
              ) : (
                list.subMenu.map(subList => (
                  <Route
                    key={subList.idKey}
                    path={subList.routerLink}
                    component={subList.component}
                  />
                ))
              )
            )}
          </Switch>
        </div>
    </BrowserRouter>
  );
}
