import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Editor from '../Editor';
import styles, { Styles } from './styles';
import { js_beautify, html_beautify } from 'js-beautify';
interface P {
  match: any;
  location: any;
}

const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

export default class EditCode extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(EditCode) as React.ComponentType<P>;

  private EditorRef = React.createRef();

  render() {
    console.log(this.props);
    const { classes, location } = this.props;

    return (
      <div className={classes.root}>
        <Editor.Display refValue={this.EditorRef} value={location.state.file} language={location.state.language} />
      </div>
    );
  }
}
