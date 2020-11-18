import { createStyles, Theme } from '@material-ui/core';
export type Styles = 'root' | 'details' | 'content' | 'cover' | 'controls' | 'playIcon'; // add class create

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '75%',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });

export default styles;
