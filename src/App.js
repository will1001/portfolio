import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import LandingPage from "./Containers/LandingPage";

const useStyles = makeStyles({
  bodyBg: {
    display: "flex",
    backgroundColor: "#060818",
  }
});

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.bodyBg}>
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
