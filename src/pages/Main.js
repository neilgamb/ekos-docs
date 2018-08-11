import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography, withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function Main(props) {
  const { classes, open } = props;
  return (
    <main
      className={classNames(classes.content, classes['content-left'], {
        [classes.contentShift]: open,
        [classes['contentShift-left']]: open,
      })}
    >
      <div className={classes.drawerHeader} />
      <Typography>You think water moves fast? You should see ice.</Typography>
    </main>
  );
}

const drawerWidth = 240;

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
});

Main.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);
