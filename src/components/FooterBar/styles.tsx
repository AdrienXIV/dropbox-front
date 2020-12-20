import { createStyles , Theme } from '@material-ui/core';

export type Styles = 'footerBar' | 'title' | 'mainfooter' | 'root' | 'paper' | 'contenufooter' | 'listemedia' 
| 'footermedias' | 'footerContact' | 'listeimg' | 'develop' | 'footerh3';

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
        width: '800px',
        height: '200px',
        margin: '0 auto',

        display: 'flex',
        alignItems: 'flex-start',
        fontSize: '20px',
        justifyContent: 'center',
        padding: '1px ',
    },
    footerContact: {
    padding: '5px 0',

    },
    listeimg :{
      width: '100px',
      margin:'10px',
      padding : '5px 0px'   ,
 
    },
    develop: {
      listStyleType: 'none',
    },
    footerh3: {
      fontSize: '25px',
      paddingBottom: '5px',
    },

        
});

export default styles;

