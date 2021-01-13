import React from 'react';
import { Button, Container, Grid, TextField, Card, CardContent, withStyles, WithStyles } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
import { getprofil } from '../utils/api';
import { updateprofil } from '../utils/api';
import history from '../history';
import { setCookie } from '../utils/cookie';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface P {}
interface S {
  email: string;
  username: string;
}

export default class ModifyProfil extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(ModifyProfil) as React.ComponentType<P>;
  public state: Readonly<S> = { email: '', username: '' };

  async componentDidMount() {
    try {
      const { data } = await getprofil();
      this.setState({ ...data });
      console.log('data: ', data);
    } catch (error) {
      console.log('error: ', error);
      // mauvais token donc retour à l'accueil pour se connecter
      if (error.response.status === 401 || error.response.status === 403) {
        // suppression des cookies + redirection accueil si le token n'est pas bon
        setCookie('token', '', 0);
        setCookie('email', '', 0);
        history.replace('/');
      }
    }
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateprofil(this.state);
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
    const { email, username } = this.state;

    return (
      <div>
        <Link to='/tableau-de-bord'>
          <KeyboardBackspaceIcon style={{ color: 'blue', fontSize: 'xxx-large', margin: '1% 0 0 2.5%' }} />
        </Link>
        <Container maxWidth='lg' className={classes.container}>
          <Card className={classes.root}>
            <CardContent className={classes.blockLeft}>
              <form className={classes.form} noValidate autoComplete='off' onSubmit={this.handleSubmit}>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                      <AlternateEmailIcon />
                    </Grid>
                    <Grid item>
                      <TextField name='email' label='Courriel' type='email' value={email} />
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
                        name='username'
                        label='username'
                        type='text'
                        value={username}
                        onChange={this.handleChange}
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.buttonSignin}>
                  <Button type='submit' variant='contained'>
                    Modifier
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Container>
      </div>
    );
  }
}
