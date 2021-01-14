import React from 'react';
import { createStyles, withStyles, Theme, MenuProps, Menu } from '@material-ui/core';
export type Styles = 'root' | 'container' | 'margin' | 'blockLeft' | 'blockRight' | 'form' | 'buttonSignup' | 'buttonSignin'; // add class create

export const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const styles = (theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    root: {
      display: 'flex',
      width: '75%',
    },
    margin: {
      margin: theme.spacing(1),
    },
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    buttonSignin: {
      marginTop: '10%',
      textAlign: 'center',
    },
    buttonSignup: {
      color: '#2c3e50',
      marginTop: '10%',
      textAlign: 'center',
      width: '50%',
      alignSelf: 'center',
    },
    blockRight: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '50%',
      backgroundColor: '#2c3e50',
      color: 'white',
    },
    blockLeft: {
      flex: '1',
    },
  });

export default styles;
