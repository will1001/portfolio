import { combineReducers } from "redux";
import bellNotifReducer from "./BellNotifReducer";
import mailNotifReducer from "./MailNotifReducer";
import drawerListMenuReducer from "./DrawerListMenuReducer";

const rootReducer = combineReducers({
  bell: bellNotifReducer,
  mail: mailNotifReducer,
  drawerListMenu: drawerListMenuReducer,
});

export default rootReducer;
