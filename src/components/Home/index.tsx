import React from 'react';
import { Button, Container, Grid, TextField, Card, CardContent, Typography, withStyles, WithStyles } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
interface P {}

export default class Home extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(Home) as React.ComponentType<P>;

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth='lg' className={classes.container}>
        <Card className={classes.root}>
          <CardContent className={classes.blockLeft}>
            <Typography component='h5' variant='h5' align='center'>
              Connexion
            </Typography>
            <form className={classes.form} noValidate autoComplete='off'>
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
            <Button variant='contained' className={classes.buttonSignup}>
              S&apos;inscrire
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
