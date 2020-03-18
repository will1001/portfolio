import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import BookIcon from "@material-ui/icons/Book";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#0e1726",
    color: "#e0e6ed"
  },
  fontColor: {
    color: "#e0e6ed"
  }
});

export default function TodoList() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <BookIcon />
              <p>Todo List</p>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <BookIcon />
              <p>Todo List</p>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <h1>xs=12</h1>
            </Grid>
            <Grid item xs={12}>
              <h1>xs=12</h1>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
