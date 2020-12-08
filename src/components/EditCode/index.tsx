import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Editor from '../Editor';
import styles, { Styles } from './styles';
interface P {
  match: any;
}
interface S {
  html: string;
  css: string;
}
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

export default class EditCode extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(EditCode) as React.ComponentType<P>;
  public state: Readonly<S> = { html: '', css: '' };

  onChange = (editor: any, data: any, value: string) => {
    this.setState({ html: value });
  };
  render() {
    const { classes } = this.props;
    const { html, css } = this.state;
    return (
      <div className={classes.root}>
        <Editor.Display language='css' displayName='CSS' value={css} onChange={this.onChange} />
      </div>
    );
  }
}
