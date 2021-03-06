import { createStyles, Theme, fade } from '@material-ui/core';

export type Styles =
  | 'grow'
  | 'signout'
  | 'menuButton'
  | 'title'
  | 'search'
  | 'marginRigh'
  | 'searchIcon'
  | 'inputRoot'
  | 'inputInput'
  | 'sectionDesktop'
  | 'btnProfil'
  | 'sectionMobile'; // add class create
const styles = (theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
      '&>header>div': {
        backgroundColor: '#2c3e50',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      width: '100%',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    signout: {
      width: '100%',
      textAlign: 'end',
      '&>button': {
        color: 'white',
      },
    },
    btnProfil: {
      width: '100%',
      '&>button': {
        color: 'white',
      },
    },
  });

export default styles;
