import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import AppBarWrapper from '../components/AppBarWrapper';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <AppBarWrapper title="Home" type="secondary" />
      </Fragment>
    );
  }
}

const styles = {};

export default withStyles(styles)(Home);
