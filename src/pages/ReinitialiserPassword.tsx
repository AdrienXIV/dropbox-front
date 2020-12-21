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
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import styles, { Styles } from './styles';
import { resetPassword } from "../utils/api";

import history from '../history';

interface P { match:any;}
interface S {
  password: string;
  confirm: string;
  str:string;
}

export default class Reinitialiser extends React.Component<P & WithStyles<Styles>,S> {
    public static Display = withStyles(styles as any)(Reinitialiser) as React.ComponentType<P>;
    public state: Readonly<S> = { password: '',confirm: '',str:this.props.match.params.str};
  

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const { data } = await resetPassword(this.state);
          history.push('/');
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
      const { password, confirm } = this.state;
  
      return (
          <Container maxWidth='lg' className={classes.container}>
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
                        name="password" 
                        label='password' 
                        type='password' 
                        value={this.state.password} 
                        onChange={this.handleChange} />
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
                        name="confirm" 
                        label='Confirmer password' 
                        type='password'  
                        value={this.state.confirm} 
                        onChange={this.handleChange} />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.buttonSignup}>
                  <Button type='submit'  variant='contained' >
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
  