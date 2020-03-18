import React from "react";
import { SHOW_DRAWER_LIST_MENU } from "../actions/actionTypes";
import ExtensionIcon from "@material-ui/icons/Extension";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StorageIcon from "@material-ui/icons/Storage";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AppsIcon from "@material-ui/icons/Apps";
import TodoList from "../../Containers/TodoList";

const initialState = {
  listMenu: [
    {
      idKey: 0,
      title: "Dashboard",
      icon: <DashboardIcon />,
      subMenuIsOpen: false,
      routerLink: "/dashboard",
      component: TodoList,
      subMenu: []
    },
    {
      idKey: 1,
      title: "Apps",
      icon: <AppsIcon />,
      subMenuIsOpen: false,
      routerLink: "/apps",
      component: TodoList,
      subMenu: [
        {
          idKey: 0,
          title: "Todo List",
          routerLink: "/todoList",
          component: TodoList
        },
        {
          idKey: 1,
          title: "Scrumboard",
          routerLink: "/scrumboard",
          component: TodoList
        },
        {
          idKey: 2,
          title: "Chat",
          routerLink: "/chat",
          component: TodoList
        },
        {
          idKey: 3,
          title: "Calendar",
          routerLink: "/calendar",
          component: TodoList
        },
        {
          idKey: 4,
          title: "Notes",
          routerLink: "/notes",
          component: TodoList
        }
      ]
    },
    {
      idKey: 2,
      title: "Components",
      icon: <ExtensionIcon />,
      subMenuIsOpen: false,
      routerLink: "/components",
      component: TodoList,
      subMenu: [
        {
          idKey: 0,
          title: "subComponents",
          routerLink: "/subComponents",
          component: TodoList
        },
        {
          idKey: 1,
          title: "subComponents 2",
          routerLink: "/subComponents2",
          component: TodoList
        },
        {
          idKey: 2,
          title: "subComponents 3",
          routerLink: "/subComponents3",
          component: TodoList
        }
      ]
    },
    {
      idKey: 3,
      title: "Data Tables",
      icon: <StorageIcon />,
      subMenuIsOpen: false,
      routerLink: "/dataTables",
      component: TodoList,
      subMenu: [
        {
          idKey: 0,
          title: "subDataTables",
          routerLink: "/dataTables",
          component: TodoList
        },
        {
          idKey: 1,
          title: "subDataTables 2",
          routerLink: "/dataTables2",
          component: TodoList
        },
        {
          idKey: 2,
          title: "subDataTables 3",
          routerLink: "/dataTables3",
          component: TodoList
        }
      ]
    },
    {
      idKey: 4,
      title: "Forms",
      icon: <AssignmentIcon />,
      subMenuIsOpen: false,
      routerLink: "/forms",
      component: TodoList,
      subMenu: [
        {
          idKey: 0,
          title: "subForms",
          routerLink: "/subForms",
          component: TodoList
        },
        {
          idKey: 1,
          title: "subForms 2",
          routerLink: "/subForms2",
          component: TodoList
        },
        {
          idKey: 2,
          title: "subForms 3",
          routerLink: "/subForms3",
          component: TodoList
        }
      ]
    }
  ]
};

const drawerListMenuData = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DRAWER_LIST_MENU:
      return {
        ...state,
        listMenu: state.listMenu
      };

    default:
      return state;
  }
};

export default drawerListMenuData;
