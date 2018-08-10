import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import AppBarWrapper from './components/AppBarWrapper';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import theme from './styles/theme';
import './styles/App.css';

class App extends Component {
  state = { menuOpen: false };

  menuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <AppBarWrapper menuToggle={this.menuToggle} title="My Site" type="primary" />
            <Navigation open={menuOpen} menuToggle={this.menuToggle} />
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
