import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBarWrapper from './components/AppBarWrapper';
import Navigation from './pages/Navigation';
import Welcome from './pages/Welcome';
import SectionOne from './pages/SectionOne';
import SectionTwo from './pages/SectionTwo';
import getTheme from './styles/theme';

class App extends React.Component {
  state = {
    open: false,
    styleOpen: false,
    codeOpen: false,
  };

  handleDrawerOpen = () => this.setState({ open: true });
  handleDrawerClose = () => this.setState({ open: false });
  handleStyleClick = () => this.setState({ styleOpen: !this.state.styleOpen, codeOpen: false });
  handleCodeClick = () => this.setState({ codeOpen: !this.state.codeOpen, styleOpen: false });

  render() {
    const { classes } = this.props;
    const { open, styleOpen, codeOpen } = this.state;

    return (
      <MuiThemeProvider theme={getTheme('cidermaker')}>
        <Router>
          <div className={classes.appFrame}>
            <AppBarWrapper open={open} handleDrawerOpen={this.handleDrawerOpen} />
            <Navigation
              open={open}
              styleOpen={styleOpen}
              codeOpen={codeOpen}
              handleDrawerClose={this.handleDrawerClose}
              handleStyleClick={this.handleStyleClick}
              handleCodeClick={this.handleCodeClick}
            />

            <main
              className={classNames(classes.content, classes['content-left'], {
                [classes.contentShift]: open,
                [classes['contentShift-left']]: open,
              })}
            >
              <div className={classes.drawerHeader} />
              <Route exact path="/" component={Welcome} />
              <Route path="/section_one" render={() => <SectionOne open={open} />} />
              <Route path="/section_two" render={() => <SectionTwo open={open} />} />
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
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    padding: '20px 10px',
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
