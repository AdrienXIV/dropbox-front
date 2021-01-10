import React from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
  withStyles,
  WithStyles,
  Snackbar,
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
import { register } from '../utils/api';
import history from '../history';
import { setCookie } from '../utils/cookie';
import axios from 'axios';
import { Alert, AlertProps } from '@material-ui/lab';

interface P {}
interface S {
  email: string;
  username: string;
  password: string;
  confirm: string;
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
}
export default class Register extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Register) as React.ComponentType<P>;
  public state: Readonly<S> = {
    email: '',
    username: '',
    password: '',
    confirm: '',
    message: '',
    open: false,
    severity: 'success',
  };
  async send(e: React.MouseEvent) {
    e.preventDefault();
    try {
      const { data } = await register(this.state);
      setCookie('token', data.token, 1);
      // ajout du token dans les requetes http
      axios.defaults.headers = {
        authorization: `Baerer ${data.token}`,
      };
      history.push('/tableau-de-bord');
    } catch (error) {
      console.error(error);
    }
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  isValidPassword = (password: string) => {
    const regexp = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
    return regexp.test(password);
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, confirm, email } = this.state;
    const errorsField = [];
    try {
      if (!this.isValidEmail(email)) {
        errorsField.push('Format courriel invalide');
      }
      if (!this.isValidPassword(password)) {
        errorsField.push('Le mot de passe doit contenir au moins des caractères spéciaux et des lettres majuscules');
      }
      if (password !== confirm) {
        errorsField.push('Les mots de passe ne sont pas identiques');
      }
      // si y'a des erreurs
      if (errorsField.length > 0) {
        // affichage des erreurs
        this.setState({ message: errorsField.join(' | '), severity: 'error', open: true });
        return;
      } else {
        // ajout du token dans les requetes http
        const { data } = await register(this.state);
        axios.defaults.headers = {
          authorization: `Baerer ${data.token}`,
        };
        history.push('/tableau-de-bord');
      }
    } catch (error) {
      console.error(error);
      this.setState({ open: true, severity: 'error', message: error.response.data.error });
    }
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
          autoHideDuration={severity === 'error' ? null : 6000}
          open={open}
          onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <Card className={classes.root}>
          <CardContent className={classes.blockLeft}>
            <Typography component='h5' variant='h5' align='center'>
              Inscription
            </Typography>
            <form className={classes.form} noValidate autoComplete='off' onSubmit={this.handleSubmit}>
              <span>* champ requis</span>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems='flex-end'>
                  <Grid item>
                    <AlternateEmailIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      name='email'
                      label='Courriel'
                      type='email'
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems='flex-end'>
                  <Grid item>
                    <AccountBoxIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      name='username'
                      label="Nom d'utilisateur"
                      type='text'
                      value={this.state.username}
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
                      required
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
                      required
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
                  S&apos;inscrire
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
