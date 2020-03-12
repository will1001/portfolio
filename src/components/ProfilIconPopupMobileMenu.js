import React from "react";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MailNotification from "./MailNotification";
import BellNotification from "./BellNotification";
import ProfileIcon from "./ProfileIcon";

ProfilIconPopupMobileMenu.propTypes = {
  mobileMoreAnchorEl: PropTypes.any,
  mobileMenuId: PropTypes.string,
  handleMobileMenuClose: PropTypes.func,
  handleProfileMenuOpen: PropTypes.func
};

export default function ProfilIconPopupMobileMenu(props) {
  const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl);

  return (
    <div>
      <Menu
        anchorEl={props.mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        id={props.mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={isMobileMenuOpen}
        onClose={props.handleMobileMenuClose}
      >
        <MenuItem>
          <MailNotification />
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <BellNotification />
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={props.handleProfileMenuOpen}>
          <ProfileIcon />
          <p>Profile</p>
        </MenuItem>
      </Menu>
    </div>
  );
}
