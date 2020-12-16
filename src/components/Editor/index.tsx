import React from 'react';
import { Snackbar, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { js_beautify, html_beautify } from 'js-beautify';
import { saveCodeFile } from '../../utils/api';
import history from '../../history';
import Alert, { AlertProps } from '@material-ui/lab/Alert';
interface P {
  language: string;
  refValue: React.RefObject<any> | undefined;
  value: string;
  filename: string;
}
interface S {
  code: string;
  langage: string;
  open: boolean;
  message: string;
  severity: AlertProps['severity'];
}

export default class Editor extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Editor) as React.ComponentType<P>;
  public state: Readonly<S> = { code: '', langage: 'xml', open: false, severity: 'success', message: '' };

  componentDidMount() {
    console.log(this.props);
    this.setState({ langage: this.props.language, code: this.props.value });
  }

  onChange = (editor: any, change: any, value: string) => {
    this.setState({ code: value });
    // si on fait un copier-coller, le formatage se fait automatiquement
    change.origin === 'paste' && this.beautify();
  };

  beautify = () => {
    switch (this.state.langage) {
      case 'xml':
        this.setState({ code: html_beautify(this.state.code, { indent_size: 2 }) });
        break;
      default:
        break;
    }
  };
  saveCode = () => {
    console.log(this.props.filename);
    const path = sessionStorage.getItem('pathname') ? (sessionStorage.getItem('pathname') as string) : '';

    saveCodeFile({
      code: this.state.code,
      language: this.state.langage,
      path: `${path}/${this.props.filename}`,
    })
      .then(({ data }) => {
        console.log(data);
        this.setState({ message: data.message, open: true, severity: 'success' });
      })
      .catch(error => {
        console.error(error.response);
        this.setState({ message: error.response.data.error, open: true, severity: 'error' });
      });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, language, refValue } = this.props;
    const { code, open, message, severity } = this.state;
    return (
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={6000}
          open={open}
          onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <button onClick={this.beautify}>Beautify</button>
        <button onClick={this.saveCode}>Enregistrer</button>
        <ControlledEditor
          ref={refValue}
          onBeforeChange={this.onChange}
          value={code}
          className={classes.codeMirror}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: 'material',
            lineNumbers: true,
          }}
        />
      </div>
    );
  }
}
