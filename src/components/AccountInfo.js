import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#0e1726",
    color: "#e0e6ed",
    fontWeight: 700
  }
});

export default function AccountInfo() {
  const classes = useStyles();
  const listBalance = [
    {
      id: 0,
      desc: "Monthly Plan",
      nominalBalance: `$ ${199.0}`
    },
    {
      id: 1,
      desc: "Taxes",
      nominalBalance: `$ ${17.82}`
    },
    {
      id: 2,
      desc: "Extras this month",
      nominalBalance: `$ ${-0.68}`
    }
  ];

  return (
    <Card className={classes.card}>
      <CardHeader title="Account Info"></CardHeader>
      <CardContent>
        <Typography variant="h5" component="h5" align="center">
          Balance
        </Typography>
        <Typography
          style={{ color: "green" }}
          variant="h6"
          component="h6"
          align="center"
        >
          $470
        </Typography>
        <Divider
          style={{
            borderTop: "1px dashed #e0e6ed"
          }}
          light="true"
        />

        {listBalance.map(list => (
          <div
            key={list.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>{list.desc}</p>
            <p>{list.nominalBalance}</p>
          </div>
        ))}

        <Divider
          style={{
            borderTop: "1px dashed #e0e6ed"
          }}
          light="true"
        />
      </CardContent>
      <CardActions disableSpacing style={{ display: "flex", justifyContent: "space-around",textAlign:'center' }}>
        <Button variant="contained" color="primary">Summary</Button>
        <Button variant="contained" color="secondary">Transfer</Button>
      </CardActions>
    </Card>
  );
}
