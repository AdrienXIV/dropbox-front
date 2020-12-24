import { createStyles , Theme } from '@material-ui/core';

export type Styles = 'footerBar' | 'title' | 'mainfooter' | 'root' | 'paper' | 'contenufooter' | 'listemedia' 
| 'footermedias' | 'footerContact' | 'listeimg' | 'develop' | 'footerp';

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
      contenufooter : {
        marginTop: '60px',
        minHeight: '64px',
        flex: 1,
        margin: '1',
        padding: '1',
        backgroundColor: '#2c3e50',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        left: 0,
        height: '100px',
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: '11px',
        justifyContent: 'center',


    },
    footerContact: {
    padding: '5px 0',
    fontSize: '11px',

    },
    listeimg :{
      width: '100px',
      height: '100px',
      margin:'1',
      padding : '1'   ,
      
 
    },
    develop: {
      listStyleType: 'none',
    },
    footerp: {
      fontSize: '11px',
      paddingBottom: '5px',
      color: 'white',
      
    },

        
});

export default styles;

