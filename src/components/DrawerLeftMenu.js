import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "#0e1726"
  },
  iconColor: {
    color: "#e0e6ed"
  },
  fontColor: {
    color: "#e0e6ed"
  },
  dividerColor: {
    backgroundColor: "#e0e6ed"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#0e1726"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

DrawerLeftMenu.propTypes = {
  isDrawerOpen: PropTypes.bool,
  handleDrawerClose: PropTypes.func
};

export default function DrawerLeftMenu(props) {
  const classes = useStyles();
  const theme = useTheme();

  const ListMenu = [
    {
      title: "Inbox",
      icon: <InboxIcon />
    },
    {
      title: "Send email",
      icon: <MailIcon />
    }
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.isDrawerOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={props.handleDrawerClose}
            className={classes.iconColor}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider className={classes.dividerColor} />
        <List>
          {ListMenu.map(list => (
            <ListItem button key={list.title}>
              <ListItemIcon className={classes.iconColor}>
                {list.icon}
              </ListItemIcon>
              <ListItemText
                className={classes.fontColor}
                primary={list.title}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
