import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Editor from '../Editor';
import styles, { Styles } from './styles';
import { js_beautify, html_beautify } from 'js-beautify';
interface P {
  match: any;
}

const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

export default class EditCode extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(EditCode) as React.ComponentType<P>;

  private EditorRef = React.createRef();

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Editor.Display refValue={this.EditorRef} language='xml' />
      </div>
    );
  }
}
