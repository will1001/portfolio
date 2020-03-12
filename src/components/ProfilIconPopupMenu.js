import React from "react";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


ProfilIconPopupMenu.propTypes = {
    anchorEl: PropTypes.any,
    menuId: PropTypes.string,
    isMenuOpen: PropTypes.bool,
    handleMenuClose: PropTypes.func,
    
};

export default function ProfilIconPopupMenu(props) {
  return (
    <div>
      <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        id={props.menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={props.isMenuOpen}
        onClose={props.handleMenuClose}
      >
        <MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={props.handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={props.handleMenuClose}>My account2</MenuItem>
      </Menu>
    </div>
  );
}
