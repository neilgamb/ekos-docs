import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import AppBarWrapper from '../components/AppBarWrapper';

function SectionTwo(props) {
  const { classes, open } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <AppBarWrapper secondary open={open} title="Code >> Section Two" />
            <Typography align="justify" variant="subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper, ipsum ut
              condimentum pulvinar, ligula diam accumsan mi, eget tempor mauris est pretium erat. In
              malesuada nisl leo, vitae aliquet quam aliquet vel. Vestibulum imperdiet euismod arcu
              at fringilla. Mauris scelerisque orci non turpis fringilla, et tempus odio facilisis.
              Fusce maximus gravida justo sed venenatis. Suspendisse nec ullamcorper nunc, in
              bibendum nunc. Suspendisse pulvinar viverra arcu quis fermentum. Quisque sem dolor,
              interdum vitae lacus ut, tempor tempor diam. Vestibulum sodales eros tellus, vitae
              fermentum neque lacinia ut. Quisque molestie est bibendum libero volutpat ultrices.
              Cras eros purus, porttitor bibendum tellus non, auctor gravida ex. Vivamus at
              consequat ipsum. Donec viverra lectus vel bibendum eleifend. Donec elit nibh, iaculis
              placerat maximus vitae, euismod sit amet metus. Quisque ac est metus.
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
