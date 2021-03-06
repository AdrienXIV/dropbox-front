import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import styles, { Styles } from './styles';
import history from '../../history';
import { setCookie } from '../../utils/cookie';

interface P {}
// interface S {}

export class HeaderBar extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(HeaderBar) as React.ComponentType<P>;
  disconnect = () => {
    setCookie('token', '', 0);
    setCookie('email', '', 0);
    sessionStorage.clear();
    history.push('/');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position='static'>
          <Toolbar>
            {/* <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='open drawer'>
              <MenuIcon />
            </IconButton> */}
            <Typography className={classes.title} variant='h6' noWrap>
              <div className={classes.btnProfil}>
                <Button id='show-my-profile' startIcon={<AccountBoxIcon />} onClick={() => history.push('/profil')}>
                  Voir mon profil
                </Button>
              </div>
            </Typography>

            <div className={classes.signout}>
              <Button id='signout' onClick={this.disconnect}>
                Se déconnecter
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
