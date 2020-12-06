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
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
import history from '../../history';
import { login } from '../../utils/api';
import { setCookie, getCookie } from '../../utils/cookie';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

interface P {}
interface S {
  email: string;
  password: string;
}
export default class Home extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Home) as React.ComponentType<P>;
  public state: Readonly<S> = { email: '', password: '' };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await login(this.state);
      setCookie('token', data.token, 1);
      // ajout du token dans les requetes http
      axios.defaults.headers = {
        authorization: `Baerer ${data.token}`,
      };
      history.push('/profil');
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    const { classes } = this.props;
    if (getCookie('token')) return <Redirect to='/profil' />;
    return (
      <Container maxWidth='lg' className={classes.container}>
        <Card className={classes.root}>
          <CardContent className={classes.blockLeft}>
            <Typography component='h5' variant='h5' align='center'>
              Connexion
            </Typography>
            <form onSubmit={this.handleSubmit} className={classes.form} noValidate autoComplete='off'>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems='flex-end'>
                  <Grid item>
                    <AlternateEmailIcon />
                  </Grid>
                  <Grid item>
                    <TextField
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
                    <VpnKeyIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      name='password'
                      label='Mot de passe'
                      type='password'
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.buttonSignin}>
                <Button type='submit' variant='contained'>
                  Se connecter
                </Button>
              </div>
            </form>
          </CardContent>

          <CardContent className={classes.blockRight}>
            <Typography component='h5' variant='h5' align='center'>
              Dropbox | IMIE-Paris
            </Typography>
            <Typography variant='subtitle1' align='center'>
              Groupe 6
            </Typography>
            <Button type='submit' variant='contained' className={classes.buttonSignup}>
              S&apos;inscrire
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
