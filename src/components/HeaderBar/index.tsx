import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import history from '../../history';
import { setCookie } from '../../utils/cookie';

interface P {}
// interface S {}

export class HeaderBar extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(HeaderBar) as React.ComponentType<P>;
  disconnect = () => {
    setCookie('token', '', 0);
    history.push('/');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='open drawer'>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant='h6' noWrap>
              Dropbox-IMIE
            </Typography>

            <div style={{ width: '100%', color: 'white', textAlign: 'end' }}>
              <Button onClick={this.disconnect}>Se déconnecter</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
