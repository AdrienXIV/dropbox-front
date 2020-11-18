import React from 'react';
import { Grid, Button, withStyles, WithStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import styles, { Styles } from './styles';
import LoginForm from '../LoginForm';
import AddIcon from '@material-ui/icons/Add';
interface P {}

export default class HomeGrid extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(HomeGrid) as React.ComponentType<P>;
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <LoginForm.Display />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Button variant='contained' color='primary' size='large' className={classes.button} startIcon={<AddIcon />}>
                S&apos;inscrire
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
