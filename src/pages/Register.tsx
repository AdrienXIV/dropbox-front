import React from 'react';
import { Button, Container, Grid, TextField, Card, CardContent, Typography, withStyles, WithStyles } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
import { register } from "../utils/api";
import history from '../history'
import { setCookie } from '../utils/cookie';
import axios from 'axios';


interface P { }
interface S {
email:string;
username:string;
password:string;
confirm:string;
}
export default class Register extends React.Component<P & WithStyles<Styles>,S> {
  public static Display = withStyles(styles as any)(Register) as React.ComponentType<P>;
  constructor(props:any){
    super(props)
    this.state = {
      email: "",
      username: "",
      password: "",
      confirm: ""
    };
  //  this.handleChange =this.handleChange.bind(this)
  }
  
  async send(e:React.MouseEvent) {
    e.preventDefault()
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
  /* this.setState(prevState =>({
      ...prevState,
    [e.target.name]:e.target.value
  }))

    const regex = new RegExp('/^(?=.*[A-Za-z])(?=.*)(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&]{8,}$/');
    if(!regex.test(this.state.password))
    {
      this.setState = {  }
    }else{
    console.error('mot de passe manquant');
  }*/
}
/*handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const { data } = await register(this.state);
    // ajout du token dans les requetes http
    //axios.defaults.headers = {
      authorization: `Baerer ${data.token}`,
    };
    history.push('/tableau-de-bord');
  } catch (error) {
    console.error(error);
  }
};*/

  render() {
    const { classes } = this.props;
    return (
      <Grid container={true} >
        <Container maxWidth='lg' className={classes.container}>
          <Card className={classes.root}>
            <CardContent className={classes.blockLeft}>
              <Typography component='h5' variant='h5' align='center'>
                Inscription
            </Typography>
              <form className={classes.form} noValidate autoComplete='off' >
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                      <AlternateEmailIcon />
                    </Grid>
                    <Grid item>
                      <TextField name="email" label='Courriel' type='email' value={this.state.email} onChange={this.handleChange} />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                      <AccountBoxIcon />
                    </Grid>
                    <Grid item>
                      <TextField name="username" label="Nom d'utilisateur" type='text' value={this.state.username} onChange={this.handleChange} />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                      <VpnKeyIcon />
                    </Grid>
                    <Grid item>
                      <TextField name="password" label='password' type='password' value={this.state.password} onChange={this.handleChange} />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                      <VpnKeyIcon />
                    </Grid>
                    <Grid item>
                      <TextField name="confirm" label='Confirmer password' type='password'  value={this.state.confirm} onChange={this.handleChange} />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.buttonSignup}>
                <Button type='submit'  variant='contained' >
                  S&apos;inscrire
            </Button>
            </div>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    );
  }
}
