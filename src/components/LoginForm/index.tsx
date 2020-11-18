import React from 'react';
import { Button, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
interface P {}
export default class LoginForm extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(LoginForm) as React.ComponentType<P>;
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete='off'>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
              <AlternateEmailIcon />
            </Grid>
            <Grid item>
              <TextField label='Courriel' type='email' />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
              <VpnKeyIcon />
            </Grid>
            <Grid item>
              <TextField label='Mot de passe' type='password' />
            </Grid>
          </Grid>
        </div>
        <Button variant='contained'>Se connecter</Button>
      </form>
    );
  }
}
