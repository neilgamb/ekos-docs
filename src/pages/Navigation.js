import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, MenuItem, withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const Navigation = props => (
  <Drawer
    classes={{
      paper: props.classes.drawerPaper,
    }}
    transitionDuration={300}
    open={props.open}
    variant="permanent"
    anchor="left"
  >
    <NavLink
      exact
      className={props.classes.navLink}
      onClick={props.menuToggle}
      activeclass="active"
      to="/"
    >
      <MenuItem className={props.classes.menuItem}>Home</MenuItem>
    </NavLink>
    <NavLink
      className={props.classes.navLink}
      onClick={props.menuToggle}
      activeclass="active"
      to="/about"
    >
      <MenuItem className={props.classes.menuItem}>About</MenuItem>
    </NavLink>
    <NavLink
      className={props.classes.navLink}
      onClick={props.menuToggle}
      activeclass="active"
      to="/contact"
    >
      <MenuItem className={props.classes.menuItem}>Contact</MenuItem>
    </NavLink>
  </Drawer>
);

const styles = {
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  menuItem: {
    padding: '10px 100px 10px 25px',
  },
  navLink: {
    textDecoration: 'none',
  },
};

export default withStyles(styles)(Navigation);

Navigation.propTypes = {
  open: PropTypes.bool,
  menuToggle: PropTypes.func.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

Navigation.defaultProps = {
  open: false,
};
