import React from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
  withStyles,
  WithStyles,
  Typography,
  Snackbar,
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import styles, { Styles } from './styles';
import { resetPassword } from '../utils/api';

import history from '../history';
import { Alert, AlertProps } from '@material-ui/lab';

interface P {
  match: any;
}
interface S {
  password: string;
  confirm: string;
  str: string;
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
}

export default class Reinitialiser extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Reinitialiser) as React.ComponentType<P>;
  public state: Readonly<S> = {
    password: '',
    confirm: '',
    str: this.props.match.params.str,
    message: '',
    open: false,
    severity: 'success',
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, confirm, str } = this.state;
    try {
      const data = { password, confirm, str };
      await resetPassword(data);
      this.setState({
        open: true,
        severity: 'success',
        message: 'Mot de passe réinitialisé avec succès ! Redirection automatique vers la page de connexion',
      });
      setTimeout(() => {
        history.push('/');
      }, 3000);
    } catch (error) {
      console.error(error);
      this.setState({ open: true, severity: 'error', message: error.response.data.error });
    }
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { severity, message, open } = this.state;

    return (
      <Container maxWidth='lg' className={classes.container}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={severity === 'error' ? null : 3000}
          open={open}
          onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <Card className={classes.root}>
          <CardContent className={classes.blockLeft}>
            <Typography component='h5' variant='h5' align='center'>
              Réinitialiser votre mot de passe
            </Typography>
            <form className={classes.form} noValidate autoComplete='off' onSubmit={this.handleSubmit}>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems='flex-end'>
                  <Grid item>
                    <VpnKeyIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      name='password'
                      label='password'
                      type='password'
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems='flex-end'>
                  <Grid item>
                    <VpnKeyIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      name='confirm'
                      label='Confirmer password'
                      type='password'
                      value={this.state.confirm}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.buttonSignup}>
                <Button type='submit' variant='contained'>
                  Reinitialiser
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
