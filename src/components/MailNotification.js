import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addMailNotif } from "../redux/actions/mailNotifAction";

export default function MailNotification() {
   const mailNotif = useSelector(state => state.mail.mailNotif);
   const dispatch = useDispatch();
  return (
    <>
      <IconButton
        onClick={() => dispatch(addMailNotif())}
        aria-label="show 21 new mails"
        color="inherit"
        style={{ color: "#e0e6ed" }}
      >
        <Badge badgeContent={mailNotif} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    </>
  );
}
