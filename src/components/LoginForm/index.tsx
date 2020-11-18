import React from 'react';
import { TextField, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';

interface P {}
export default class LoginForm extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(LoginForm) as React.ComponentType<P>;
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete='off'>
        <div className={classes.divContainer}>
          <TextField label='Courriel' variant='outlined' type='email' placeholder='exemple@gmail.com' />
        </div>
        <div className={classes.divContainer}>
          <TextField label='Mot de passe' variant='outlined' type='password' />
        </div>
      </form>
    );
  }
}
