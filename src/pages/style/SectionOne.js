import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import AppBarWrapper from '../../components/AppBarWrapper';

function SectionOne(props) {
  const { classes, open } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <AppBarWrapper secondary open={open} title="Code > Section One" />
            <Typography align="justify" variant="subheading">
              Text here
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

export default withStyles(styles)(SectionOne);

SectionOne.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  open: PropTypes.bool.isRequired,
};
