import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

export default function MailNotification() {
  return (
    <>
      <IconButton
        aria-label="show 21 new mails"
        color="inherit"
        style={{ color: "#e0e6ed" }}
      >
        <Badge badgeContent={21} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    </>
  );
}
