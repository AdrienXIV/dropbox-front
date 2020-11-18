import { createStyles, Theme } from '@material-ui/core';

export type Styles = 'root' | 'divContainer'; // add class create

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    divContainer: {
      width: '100%',
    },
  });

export default styles;
