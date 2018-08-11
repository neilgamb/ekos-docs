// import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { Drawer, Hidden, MenuItem, withStyles } from '@material-ui/core';
// import { NavLink } from 'react-router-dom';

// function Navigation(props) {
//   const { classes, theme, mobileOpen, handleDrawerToggle } = props;
//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//       <NavLink
//         exact
//         className={classes.navLink}
//         activeclass="active"
//         to="/"
//       >
//         <MenuItem className={classes.menuItem}>Home</MenuItem>
//       </NavLink>
//       <NavLink
//         className={classes.navLink}
//         activeclass="active"
//         to="/about"
//       >
//         <MenuItem className={classes.menuItem}>About</MenuItem>
//       </NavLink>
//       <NavLink
//         className={classes.navLink}
//         activeclass="active"
//         to="/contact"
//       >
//         <MenuItem className={classes.menuItem}>Contact</MenuItem>
//       </NavLink>
//     </div>

//   )
//   return (
//     <Fragment>
//       <Hidden mdUp>
//         <Drawer
//           variant="temporary"
//           anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           ModalProps={{
//             keepMounted: true,
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Hidden>
//       <Hidden smDown implementation="css">
//         <Drawer
//           variant="permanent"
//           open
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Hidden>
//     </Fragment>
//   );
// }

// const drawerWidth = 240;

// const styles = theme => ({
//   drawerPaper: {
//     width: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       position: 'relative',
//     },
//   },
//   menuItem: {
//     padding: '10px 100px 10px 25px',
//   },
//   navLink: {
//     textDecoration: 'none',
//   },
//   toolbar: theme.mixins.toolbar,
// });

// export default withStyles(styles, { withTheme: true })(Navigation);

// Navigation.propTypes = {
//   open: PropTypes.bool,
//   classes: PropTypes.instanceOf(Object).isRequired,
// };

// Navigation.defaultProps = {
//   open: false,
// };
