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
  Snackbar,
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
import { getprofil, removeProfile } from '../utils/api';
import { updateprofil } from '../utils/api';
import history from '../history';
import Alert, { AlertProps } from '@material-ui/lab/Alert';
import { setCookie } from '../utils/cookie';

interface P {}
interface S {
  email: string;
  username: string;
  isLoaded: boolean;
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
}

export default class ModifyProfil extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(ModifyProfil) as React.ComponentType<P>;
  public state: Readonly<S> = {
    email: '',
    username: '',
    isLoaded: false,
    message: '',
    open: false,
    severity: 'success',
  };

  async componentDidMount() {
    try {
      const { data } = await getprofil();
      this.setState({ isLoaded: true, ...data });
      console.log('data: ', data);
    } catch (error) {
      this.setState({ isLoaded: true });
    }
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await updateprofil(this.state);
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

  removeMyProfile = async () => {
    const r = confirm('Voulez-vous supprimer votre profil définitivement ?');
    if (r)
      try {
        const { data } = await removeProfile();
        this.setState({
          message: `${data.message}. Redirection automatique vers la page d'accueil`,
          severity: 'success',
          open: true,
        });
        // suppression du token et autres infos
        setCookie('token', '', 0);
        setCookie('email', '', 0);
        sessionStorage.clear();
        // redirection
        setTimeout(() => {
          history.replace('/');
        }, 3000);
      } catch (error) {
        this.setState({ message: error.response.data.error, severity: 'error', open: true });
      }
    return;
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { email, username, isLoaded, message, severity, open } = this.state;

    if (!isLoaded) return <div>Chargement…</div>;
    return (
      <div id='my-profile'>
        <Container maxWidth='lg' className={classes.container}>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            autoHideDuration={3000}
            open={open}
            onClose={this.handleClose}>
            <Alert onClose={this.handleClose} severity={severity}>
              {message}
            </Alert>
          </Snackbar>
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
                  <Button
                    id='delete-profile'
                    type='button'
                    variant='contained'
                    onClick={this.removeMyProfile}
                    style={{ backgroundColor: 'red', color: 'white', marginLeft: '2.5%' }}>
                    Supprimer mon profil
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
