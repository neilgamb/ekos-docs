import React, { Component, Fragment } from 'react';
import { Typography, withStyles } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Typography>Home</Typography>
      </Fragment>
    );
  }
}

const styles = {};

export default withStyles(styles)(Home);
