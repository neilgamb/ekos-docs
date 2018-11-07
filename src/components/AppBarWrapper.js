import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppBar, IconButton, Toolbar, Typography, withStyles, withTheme } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

function AppBarWrapper(props) {

  const {
    classes,
    open,
    location,
    handleDrawerOpen,
  } = props;

  let title;

  switch (location.pathname) {
    // case "/": title = ""; break;
    case "/section_one": title = "Section One"; break;
    case "/section_two": title = "Section Two"; break;
    default: title = "";
  }

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
  appBarText: {
    color: 'black',
    whiteSpace: 'nowrap'
  },
  hide: {
    display: 'none',
  },
});

// export default withTheme()(withStyles(styles)(AppBarWrapper));
export default withRouter(withTheme()(withStyles(styles)(AppBarWrapper)));


AppBarWrapper.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  handleDrawerOpen: PropTypes.func,
};

AppBarWrapper.defaultProps = {
  handleDrawerOpen: () => { },
};