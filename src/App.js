import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBarWrapper from './components/AppBarWrapper';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ekosTheme from './styles/theme';

class App extends React.Component {
  state = { open: false };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <MuiThemeProvider theme={ekosTheme}>
        <Router>
          <div className={classes.appFrame}>
            <AppBarWrapper open={open} handleDrawerOpen={this.handleDrawerOpen} />
            <Navigation open={open} handleDrawerClose={this.handleDrawerClose} />

            <main
              className={classNames(classes.content, classes['content-left'], {
                [classes.contentShift]: open,
                [classes['contentShift-left']]: open,
              })}
            >
              <div className={classes.drawerHeader} />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </main>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
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
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
