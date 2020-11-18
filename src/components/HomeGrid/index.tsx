import React from 'react';
import { Grid, Button, withStyles, WithStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import styles, { Styles } from './styles';
import LoginForm from '../LoginForm';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
interface P {}

export default class HomeGrid extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(HomeGrid) as React.ComponentType<P>;
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content} style={{ textAlign: 'center' }}>
            <Typography component='h5' variant='h5'>
              Connexion
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'></Typography>
          </CardContent>
          <div className={classes.controls}>
            <LoginForm.Display />
          </div>
        </div>
        <CardContent className={classes.content} style={{ backgroundColor: '#2c3e50', color: 'white', textAlign: 'center' }}>
          <Typography component='h5' variant='h5'>
            Dropbox | IMIE-Paris
          </Typography>
          <Typography variant='subtitle1'>Groupe 6</Typography>
          <Button style={{ marginTop: '5%', color: 'white' }}>S&apos;inscrire</Button>
        </CardContent>
      </Card>
    );
  }
}
