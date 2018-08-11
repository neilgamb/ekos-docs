import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Divider, IconButton, withStyles } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

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
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <h1>Hello</h1>
      <Divider />
      <h1>World</h1>
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
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navigation);
