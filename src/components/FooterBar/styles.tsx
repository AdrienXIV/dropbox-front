import { createStyles } from '@material-ui/core';

export type Styles =
  | 'footerBar'
  | 'title'
  | 'mainfooter'
  | 'root'
  | 'paper'
  | 'contenufooter'
  | 'listemedia'
  | 'footermedias'
  | 'footerContact'
  | 'listeimg'
  | 'develop'
  | 'footerp';

const styles = () =>
  createStyles({
    footerBar: {
      flex: 1,
      backgroundColor: 'rgb(212, 214, 238 )',
      width: '100%',
    },
    root: {
      flexGrow: 1,
    },
    contenufooter: {
      flex: 1,
      marginTop: '2.5%',
      backgroundColor: '#2c3e50',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: 'medium',
      justifyContent: 'center',
    },
    footerContact: {
      padding: '5px 0',
      fontSize: 'medium',
    },
    listeimg: {
      width: '100px',
      height: '100px',
      margin: '1',
      padding: '1',
    },
    develop: {
      listStyleType: 'none',
    },
    footerp: {
      fontSize: 'medium',
      paddingBottom: '5px',
      color: 'white',
    },
  });

export default styles;
