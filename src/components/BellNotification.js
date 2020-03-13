import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

export default function BellNotification() {
  return (
    <>
      <IconButton
        aria-label="show 212 new notifications"
        color="inherit"
        style={{ color: "#e0e6ed" }}
      >
        <Badge badgeContent={212} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </>
  );
}
