import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, MenuItem, withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  const { classes } = props;
  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      anchor="left"
    >
      <div className={classes.toolbar} />
      <NavLink
        exact
        className={classes.navLink}
        activeclass="active"
        to="/"
      >
        <MenuItem className={classes.menuItem}>Home</MenuItem>
      </NavLink>
      <NavLink
        className={classes.navLink}
        activeclass="active"
        to="/about"
      >
        <MenuItem className={classes.menuItem}>About</MenuItem>
      </NavLink>
      <NavLink
        className={classes.navLink}
        activeclass="active"
        to="/contact"
      >
        <MenuItem className={classes.menuItem}>Contact</MenuItem>
      </NavLink>
    </Drawer>
  );
}

const drawerWidth = 240;

const styles = theme => ({
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
  toolbar: theme.mixins.toolbar,
});

export default withStyles(styles)(Navigation);

Navigation.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.instanceOf(Object).isRequired,
};

Navigation.defaultProps = {
  open: false,
};
