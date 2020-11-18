import React from 'react';
import { Button, Grid, TextField, Card, CardContent, Typography, withStyles, WithStyles } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
interface P {}

export default class HomeGrid extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(HomeGrid) as React.ComponentType<P>;
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.blockLeft} style={{ textAlign: 'center' }}>
            <Typography component='h5' variant='h5'>
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
                <Button variant='contained'>Se connecter</Button>
              </div>
            </form>
          </CardContent>

          <CardContent className={classes.blockRight} style={{ backgroundColor: '#2c3e50', color: 'white', textAlign: 'center' }}>
            <Typography component='h5' variant='h5'>
              Dropbox | IMIE-Paris
            </Typography>
            <Typography variant='subtitle1'>Groupe 6</Typography>
            <Button style={{ marginTop: '5%', color: 'white' }}>S&apos;inscrire</Button>
          </CardContent>
        </div>
      </Card>
    );
  }
}
