import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles, withTheme } from '@material-ui/core';
import classNames from 'classnames';

function AppBarWrapper(props) {
  const { classes, title } = props;
  return (
    <AppBar
      position="absolute"
      className={classNames(classes.appBar, classes[`appBar-left`])}
    >
      <Toolbar>
        <Typography variant="title">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

const drawerWidth = 240;

const styles = {
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

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
