import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Collapse, Drawer, ListItem, IconButton, Typography, withStyles } from '@material-ui/core';
import { ChevronLeft, ExpandMore, ExpandLess } from '@material-ui/icons';
import logo from '../images/ekos_.png';

function Navigation(props) {
  const {
    classes,
    open,
    styleOpen,
    codeOpen,
    handleDrawerClose,
    handleStyleClick,
    handleCodeClick,
  } = props;
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

      <ListItem button className={classes.listItem}>
        <NavLink exact className={classes.navLink} activeclass="active" to="/">
          <Typography variant="subheading">Welcome</Typography>
        </NavLink>
      </ListItem>

      <ListItem button className={classes.listItem} onClick={handleStyleClick}>
        <Typography variant="subheading">Style</Typography>
        {styleOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={styleOpen} timeout="auto" unmountOnExit>
        <ListItem button className={classes.listItem}>
          <NavLink className={classes.navLink} activeclass="active" to="/section_one">
            <Typography color="secondary" variant="subheading">
              Section One
            </Typography>
          </NavLink>
        </ListItem>
      </Collapse>

      <ListItem button className={classes.listItem} onClick={handleCodeClick}>
        <Typography variant="subheading">Code</Typography>
        {codeOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={codeOpen} timeout="auto" unmountOnExit>
        <ListItem button className={classes.listItem}>
          <NavLink className={classes.navLink} activeclass="active" to="/section_two">
            <Typography color="secondary" variant="subheading">
              Section Two
            </Typography>
          </NavLink>
        </ListItem>
      </Collapse>
    </Drawer>
  );
}

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    background: theme.palette.secondary.light,
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
  listItem: {
    padding: '10px 15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  'listItem:hover': {
    background: 'background: rgb(231, 231, 231)',
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
