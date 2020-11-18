import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
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
              <TextField id='input-with-icon-grid' label='Courriel' type='email' />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
              <VpnKeyIcon />
            </Grid>
            <Grid item>
              <TextField id='input-with-icon-grid' label='Mot de passe' type='password' />
            </Grid>
          </Grid>
        </div>
      </form>
    );
  }
}
