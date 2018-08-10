import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography, withStyles, withTheme } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function AppBarWrapper(props) {
  const { classes, title, handleDrawerToggle } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerToggle}
          className={classes.navIconHide}
        >
          <Menu />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap>
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
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

export default withTheme()(withStyles(styles)(AppBarWrapper));

AppBarWrapper.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  menuToggle: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
};

AppBarWrapper.defaultProps = {
  menuToggle: () => { },
};
