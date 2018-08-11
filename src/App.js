import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBarWrapper from './components/AppBarWrapper';
import Navigation from './pages/Navigation';
import Main from './pages/Main';
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
        <div className={classes.appFrame}>
          <AppBarWrapper open={open} handleDrawerOpen={this.handleDrawerOpen} />
          <Navigation open={open} handleDrawerClose={this.handleDrawerClose} />
          <Main open={open} />
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
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
};

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
