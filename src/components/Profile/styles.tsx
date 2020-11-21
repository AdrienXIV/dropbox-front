import { createStyles, Theme } from '@material-ui/core';
export type Styles = 'root' | 'menu' | 'paper' | 'base' | 'active' | 'accept' | 'reject' | 'files' | 'button'; // add class create

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 15,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    menu: {
      border: '1px solid #d3d4d5',
    },
    base: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderWidth: 2,
      borderRadius: 2,
      borderColor: '#eeeeee',
      borderStyle: 'dashed',
      backgroundColor: '#fafafa',
      color: '#bdbdbd',
      outline: 'none',
      transition: 'border .24s ease-in-out',
      cursor: 'pointer',
    },
    active: {
      borderColor: '#2196f3',
    },
    accept: {
      borderColor: '#00e676',
    },
    reject: {
      borderColor: '#ff1744',
    },
    files: {
      display: 'flex',
      flexDirection: 'column',
      width: ' 100%',
      margin: '15% 0',
      '& > div': {
        margin: '2.5% 0',
        display: 'flex',
        justifyContent: 'flex-end',
        '&>span': {
          margin: '0 auto',
        },
        '&>svg:hover': {
          color: 'red',
        },
      },
      button: {
        margin: theme.spacing(1),
      },
    },
  });

export default styles;
