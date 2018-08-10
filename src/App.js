import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core';
import AppBarWrapper from './components/AppBarWrapper';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import theme from './styles/theme';
import './styles/App.css';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <div className={classes.appFrame}>
              <AppBarWrapper title="My Site" type="primary" />
              <Navigation />
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </main>
            </div>

          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
};

export default withStyles(styles)(App);
