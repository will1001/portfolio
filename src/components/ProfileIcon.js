import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

ProfileIcon.propTypes = {
  menuId: PropTypes.string,
  handleProfileMenuOpen: PropTypes.func
};

export default function ProfileIcon(props) {
  return (
    <div>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={props.menuId}
        aria-haspopup="true"
        onClick={props.handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
}
