import { createStyles, Theme } from '@material-ui/core';
export type Styles = 'root' | 'paper'; // add class create

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

export default styles;
