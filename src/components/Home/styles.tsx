import { createStyles, Theme } from '@material-ui/core';
export type Styles = 'root' | 'container' | 'margin' | 'blockLeft' | 'blockRight' | 'form' | 'buttonSignup' | 'buttonSignin'; // add class create

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
      flexDirection: 'column',
      justifyContent: 'center',
      width: '50%',
      backgroundColor: '#2c3e50',
      color: 'white',
    },
    blockLeft: {
      textAlign: 'center',
      width: '50%',
    },
  });

export default styles;
