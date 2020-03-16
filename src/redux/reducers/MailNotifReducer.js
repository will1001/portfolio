import { ADD_MAIL_NOTIF } from "../actions/mailNotifTypes";

const initialState = {
  mailNotif: 1
};

const mailNotifData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MAIL_NOTIF:
      return {
        ...state,
        mailNotif: state.mailNotif + 1
      };

    default:
      return state;
  }
};

export default mailNotifData;
