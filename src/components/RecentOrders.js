import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#0e1726",
    color: "#e0e6ed",
    fontWeight: 700
  },
  table: {
    minWidth: 650,
    backgroundColor: "#0e1726"
  },
  tableRow: {
    "&$hover:hover": {
      transform: "scale(1.02)",
      transition: "0.1s"
    }
  },
  tableFontColor: {
    color: "#888ea8",
    "$hover:hover &": {
      color: "#ffffff"
    }
  },
  hover: {},
  pendingStatus: {
    border: "1px solid #e7515a",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    color: "#e7515a",
    "&:hover": {
      color: "#ffffff",
      cursor: "pointer"
    }
  },
  shippedStatus: {
    border: "1px solid #1b55e2",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    color: "#1b55e2",
    "&:hover": {
      color: "#ffffff",
      cursor: "pointer"
    }
  },
  paidStatus: {
    border: "1px solid #009688",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    color: "#009688",
    "&:hover": {
      color: "#ffffff",
      cursor: "pointer"
    }
  }
});

function createData(id, pictures, customers, product, invoice, price, status) {
  return { id, pictures, customers, product, invoice, price, status };
}

const rows = [
  createData(
    0,
    "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
    "Andy King",
    "Nike Sport",
    "#76894",
    "$88.00",
    "shipped"
  ),
  createData(
    1,
    "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
    "Irene Collins",
    "Speakers",
    "#75844",
    "$84.00",
    "paid"
  ),
  createData(
    2,
    "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
    "Laurie Fox",
    "Camera",
    "66894",
    "$126.04",
    "pending"
  ),
  createData(
    3,
    "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
    "Luke Ivory",
    "Headphone",
    "#46894",
    "$56.07",
    "shipped"
  ),
  createData(
    4,
    "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
    "Ryan Collins",
    "Sunglasses",
    "#26974",
    "$168.09",
    "paid"
  )
];

export default function RecentOrders() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title="Recent Orders"></CardHeader>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableFontColor}>
                  Customers
                </TableCell>
                <TableCell className={classes.tableFontColor} align="right">
                  Product
                </TableCell>
                <TableCell className={classes.tableFontColor} align="right">
                  Invoice
                </TableCell>
                <TableCell className={classes.tableFontColor} align="right">
                  Price
                </TableCell>
                <TableCell className={classes.tableFontColor} align="right">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.id}
                  className={classes.tableRow}
                  hover
                  classes={{ hover: classes.hover }}
                >
                  <TableCell
                    className={classes.tableFontColor}
                    component="th"
                    scope="row"
                  >
                    <Avatar alt="customers" src={row.pictures} />
                    {row.customers}
                  </TableCell>
                  <TableCell className={classes.tableFontColor} align="right">
                    {row.product}
                  </TableCell>
                  <TableCell className={classes.tableFontColor} align="right">
                    {row.invoice}
                  </TableCell>
                  <TableCell className={classes.tableFontColor} align="right">
                    {row.price}
                  </TableCell>
                  <TableCell className={classes.tableFontColor} align="right">
                    <span
                      className={clsx("", {
                        [classes.shippedStatus]: row.status === "shipped",
                        [classes.paidStatus]: row.status === "paid",
                        [classes.pendingStatus]: row.status === "pending"
                      })}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center"
        }}
      ></CardActions>
    </Card>
  );
}
