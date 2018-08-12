import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import AppBarWrapper from '../components/AppBarWrapper';

function SectionTwo(props) {
  const { classes, open } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <AppBarWrapper secondary open={open} title="Code > Section Two" />
            <Typography align="justify" variant="subheading">
              <Markdown># This is Markdown</Markdown>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

export default withStyles(styles)(SectionTwo);

SectionTwo.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  open: PropTypes.bool.isRequired,
};
