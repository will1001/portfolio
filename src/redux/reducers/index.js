import { combineReducers } from "redux";
import bellNotifReducer from "./BellNotifReducer";
import mailNotifReducer from "./MailNotifReducer";

const rootReducer = combineReducers({
  bell: bellNotifReducer,
  mail: mailNotifReducer
});

export default rootReducer;
