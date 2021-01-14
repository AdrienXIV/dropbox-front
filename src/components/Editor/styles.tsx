import { createStyles } from '@material-ui/core';
export type Styles = 'root' | 'codeMirror'; // add class create

const styles = () =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'initial',
    },
    codeMirror: {
      '&>div': { height: '75vh' },
    },
  });

export default styles;
