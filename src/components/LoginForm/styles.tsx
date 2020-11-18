import { createStyles, Theme } from '@material-ui/core';

export type Styles = 'root' | 'divContainer' | 'margin'; // add class create

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    divContainer: {
      width: '100%',
    },
  });

export default styles;
