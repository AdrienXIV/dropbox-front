import { createStyles , Theme } from '@material-ui/core';

export type Styles = 'footerBar' | 'title' | 'mainfooter' | 'root' | 'paper' ;

const styles = (theme: Theme) =>
  createStyles({
    footerBar: {
        minHeight: '64px',
        flex: 1,
        margin: '1',
        padding: '1',
      backgroundColor: 'rgb(212, 214, 238 )',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      left: 0,

    }, 
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    mainfooter : {
      color: 'white',
      backgroundColor: '',
      padding:'0 24px',
      position: 'relative' ,
      bottom: 0,
      width: '100%',


    },
    title: {
        width: '100%',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
     
});

export default styles;

