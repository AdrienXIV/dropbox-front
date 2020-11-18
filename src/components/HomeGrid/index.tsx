import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid, withStyles, WithStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import styles, { Styles } from './styles';

interface P {}

export default class HomeGrid extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(HomeGrid) as React.ComponentType<P>;
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
