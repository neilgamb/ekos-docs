import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppBar, IconButton, Toolbar, Typography, withStyles, withTheme } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function AppBarWrapper(props) {
  const {
    classes, open, secondary, title, handleDrawerOpen,
  } = props;
  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open,
        [classes['appBarShift-left']]: open,
        [classes.appBarSecondary]: secondary,
      })}
    >
      <Toolbar disableGutters={!open}>
        {secondary ? null : (
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
        )}
        <Typography
          variant="title"
          className={classNames(classes.appBarText, { [classes.appBarTextShift]: !open })}
        >
          {title}
        </Typography>
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
  appBarSecondary: {
    background: 'transparent',
    pointerEvents: 'none',
  },
  appBarText: {
    color: 'white',
  },
  appBarTextShift: {
    marginLeft: 75,
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
  handleDrawerOpen: PropTypes.func,
  secondary: PropTypes.bool,
  title: PropTypes.string,
};

AppBarWrapper.defaultProps = {
  handleDrawerOpen: () => {},
  secondary: false,
  title: '',
};

export default withTheme()(withStyles(styles)(AppBarWrapper));
