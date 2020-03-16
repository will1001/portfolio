import React from "react";
import PropTypes from "prop-types";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addBellNotif } from "../redux/actions/bellNotifAction";

BellNotification.propTypes = {
  addBellNotif: PropTypes.func,
  bellNotif: PropTypes.number
};

export default function BellNotification() {
  const bellNotif = useSelector(state => state.bell.bellNotif);
  const dispatch = useDispatch();

  return (
    <>
      <IconButton
        onClick={() => dispatch(addBellNotif())}
        aria-label="show 212 new notifications"
        color="inherit"
        style={{ color: "#e0e6ed" }}
      >
        <Badge badgeContent={bellNotif} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </>
  );
}