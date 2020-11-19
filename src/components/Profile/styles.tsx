import { createStyles, Theme } from '@material-ui/core';
export type Styles = 'root'; // add class create

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  });

export default styles;
