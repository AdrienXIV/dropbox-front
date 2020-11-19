import React from 'react';
import { Button, Container, Grid, TextField, Card, CardContent, Typography, withStyles, WithStyles } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
interface P {}
export default class Register extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(Register) as React.ComponentType<P>;
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
                    <AccountBoxIcon/>
                  </Grid>
                  <Grid item>
                    <TextField label="Nom d'utilisateur" type='text' />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems='flex-end'>
                  <Grid item>
                    <VpnKeyIcon />
                  </Grid>
                  <Grid item>
                    <TextField label='password' type='password' />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems='flex-end'>
                  <Grid item>
                    <VpnKeyIcon />
                  </Grid>
                  <Grid item>
                    <TextField label='Confirmer password' type='password' />
                  </Grid>
                </Grid>
              </div>
                <Button variant='contained' className={classes.buttonSignup}>
              S&apos;inscrire
            </Button>
              </form>
              </CardContent>
        </Card>
      </Container>
      </Grid>
    );
  }
}
