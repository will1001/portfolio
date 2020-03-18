import { ADD_BELL_NOTIF } from "../actions/actionTypes";

const initialState = {
  bellNotif: 1
};

const bellNotifData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BELL_NOTIF:
      return {
        ...state,
        bellNotif: state.bellNotif + 1
      };

    default:
      return state;
  }
};

export default bellNotifData;
