import React from 'react';
import { Snackbar, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import beautify from 'beautify';
import sqlFormatter from 'sql-formatter';
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

    // formattage après la récupération
    setTimeout(() => {
      this.beautify();
    }, 250);
  }

  onChange = (editor: any, change: any, value: string) => {
    this.setState({ code: value });
    // si on fait un copier-coller, le formatage se fait automatiquement
    change.origin === 'paste' && this.beautify();
  };

  beautify = () => {
    console.log('beautify', this.state.langage);
    switch (this.state.langage) {
      case 'xml':
        this.setState({ code: beautify(this.state.code, { format: 'xml' }) });
        break;
      case 'html':
        this.setState({ code: beautify(this.state.code, { format: 'html' }) });
        break;
      case 'json':
        this.setState({ code: beautify(this.state.code, { format: 'json' }) });
        break;
      case 'sql':
        this.setState({ code: sqlFormatter.format(this.state.code) });
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
