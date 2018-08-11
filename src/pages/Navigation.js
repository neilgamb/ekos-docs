import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Drawer, MenuItem, IconButton, Typography, withStyles } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

import logo from '../images/ekos_.png';

function Navigation(props) {
  const { classes, open, handleDrawerClose } = props;
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <NavLink exact to="/">
          <img className={classes.logo} src={logo} alt="Home" />
        </NavLink>

        <Typography className={classes.siteTitle} variant="title" color="inherit" noWrap>
          docs
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>

      <NavLink exact className={classes.navLink} activeclass="active" to="/">
        <MenuItem className={classes.menuItem}>Home</MenuItem>
      </NavLink>
      <NavLink className={classes.navLink} activeclass="active" to="/about">
        <MenuItem className={classes.menuItem}>About</MenuItem>
      </NavLink>
      <NavLink className={classes.navLink} activeclass="active" to="/contact">
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
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  siteTitle: {
    marginLeft: -50,
    fontWeight: 600,
  },
  logo: {
    width: 70,
  },
  menuItem: {
    padding: '10px 100px 10px 25px',
  },
  navLink: {
    textDecoration: 'none',
  },
});

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navigation);
