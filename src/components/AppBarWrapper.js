import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppBar, IconButton, Toolbar, withStyles, withTheme } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function AppBarWrapper(props) {
  const { classes, open, handleDrawerOpen } = props;
  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open,
        [classes['appBarShift-left']]: open,
      })}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
});

AppBarWrapper.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default withTheme()(withStyles(styles)(AppBarWrapper));
