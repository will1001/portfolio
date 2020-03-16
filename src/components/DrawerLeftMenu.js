import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import ExtensionIcon from "@material-ui/icons/Extension";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StorageIcon from "@material-ui/icons/Storage";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AppsIcon from "@material-ui/icons/Apps";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
  drawerHide: {
    width: 0
    // flexShrink: 0
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
  },
  subMenu: {
    paddingLeft: theme.spacing(4),
    color: "#e0e6ed"
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
      idKey: 0,
      title: "Dashboard",
      icon: <DashboardIcon />,
      subMenuIsOpen: false,
      subMenu: []
    },
    {
      idKey: 1,
      title: "Apps",
      icon: <AppsIcon />,
      subMenuIsOpen: false,
      subMenu: [
        {
          idKey: 0,
          title: "Todo List"
        },
        {
          idKey: 1,
          title: "Scrumboard"
        },
        {
          idKey: 2,
          title: "Chat"
        },
        {
          idKey: 3,
          title: "Calendar"
        },
        {
          idKey: 4,
          title: "Notes"
        }
      ]
    },
    {
      idKey: 2,
      title: "Components",
      icon: <ExtensionIcon />,
      subMenuIsOpen: false,
      subMenu: [
        {
          idKey: 0,
          title: "abcde"
        },
        {
          idKey: 1,
          title: "abcde 2"
        },
        {
          idKey: 2,
          title: "abcde 3"
        }
      ]
    },
    {
      idKey: 3,
      title: "Data Tables",
      icon: <StorageIcon />,
      subMenuIsOpen: false,
      subMenu: [
        {
          idKey: 0,
          title: "abcde"
        },
        {
          idKey: 1,
          title: "abcde 2"
        },
        {
          idKey: 2,
          title: "abcde 3"
        }
      ]
    },
    {
      idKey: 4,
      title: "Forms",
      icon: <AssignmentIcon />,
      subMenuIsOpen: false,
      subMenu: [
        {
          idKey: 0,
          title: "abcde"
        },
        {
          idKey: 1,
          title: "abcde 2"
        },
        {
          idKey: 2,
          title: "abcde 3"
        }
      ]
    }
  ];

  const [open, setOpen] = React.useState(ListMenu);

  const handleClick = idKey => {
    const menuClicked = open.slice(idKey, idKey + 1);
    const allMenu = open.filter(data => data !== menuClicked[0]);
    const menuClickedOpenStatus = !menuClicked[0].subMenuIsOpen;
    menuClicked[0].subMenuIsOpen = menuClickedOpenStatus;
    allMenu.splice(idKey, 0, ...menuClicked);
    setOpen(allMenu);
  };

  return (
    <div>
      <Drawer
        className={clsx("", {
          [classes.drawer]: props.isDrawerOpen,
          [classes.drawerHide]: !props.isDrawerOpen
        })}
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
          {ListMenu.map(list =>
            list.subMenu.length === 0 ? (
              <div key={list.idKey}>
                <Link to="/">
                  <ListItem button>
                    <ListItemIcon className={classes.iconColor}>
                      {list.icon}
                    </ListItemIcon>
                    <ListItemText
                      className={classes.fontColor}
                      primary={list.title}
                    />
                  </ListItem>
                </Link>
              </div>
            ) : (
              <div key={list.idKey}>
                <ListItem
                  button
                  onClick={() => handleClick(list.idKey)}
                  className={classes.iconColor}
                >
                  <ListItemIcon className={classes.iconColor}>
                    {list.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={list.title}
                    className={classes.iconColor}
                  />
                  {open.find(e => e.idKey === list.idKey).subMenuIsOpen ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
                <Collapse
                  in={open.find(e => e.idKey === list.idKey).subMenuIsOpen}
                  timeout="auto"
                  unmountOnExit
                  className={classes.iconColor}
                >
                  <List component="div" disablePadding key={list.idKey}>
                    {list.subMenu.map(subList => (
                      <Link
                        key={subList.idKey}
                        style={{ textDecoration: "none" }}
                        to={"/" + subList.title}
                      >
                        <ListItem button className={classes.subMenu}>
                          <ListItemIcon className={classes.iconColor}>
                            <FiberManualRecordIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={subList.title} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              </div>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
}
