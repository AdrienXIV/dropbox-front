import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Editor from '../Editor';
import styles, { Styles } from './styles';
import { js_beautify, html_beautify } from 'js-beautify';
interface P {
  match: any;
}
interface S {
  code: string;
}
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

export default class EditCode extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(EditCode) as React.ComponentType<P>;
  public state: Readonly<S> = { code: '' };

  onChange = (editor: any, change: any, value: string) => {
    console.log('change origin: ', change.origin);
    this.setState({ code: value });
    if (change.origin === 'paste') this.setState({ code: html_beautify(this.state.code, { indent_size: 2 }) });
  };
  beautify = () => {
    this.setState({ code: html_beautify(this.state.code, { indent_size: 2 }) });
  };
  render() {
    const { classes } = this.props;
    const { code } = this.state;
    return (
      <div className={classes.root}>
        <button onClick={this.beautify}>Beautify</button>
        <Editor.Display language='xml' value={code} onChange={this.onChange} />
      </div>
    );
  }
}
