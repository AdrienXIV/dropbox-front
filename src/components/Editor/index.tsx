import React from 'react';
import { Snackbar, withStyles, WithStyles } from '@material-ui/core';
import Alert, { AlertProps } from '@material-ui/lab/Alert';
import styles, { Styles } from './styles';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/php/php';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';
import { Controlled as ControlledEditor } from 'react-codemirror2';
// import beautifier from '@unibeautify/beautifier-php-codesniffer';
import beautify from 'beautify';
import sqlFormatter from 'sql-formatter';
import { saveCodeFile } from '../../utils/api';
// import prettier from 'prettier/standalone';
// import unibeautify from 'unibeautify';

interface P {
  language: string;
  refValue: React.RefObject<any> | undefined;
  value: string;
  filename: string;
}
interface S {
  code: string;
  language: string;
  open: boolean;
  message: string;
  severity: AlertProps['severity'];
}

export default class Editor extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Editor) as React.ComponentType<P>;
  public state: Readonly<S> = { code: '', language: 'xml', open: false, severity: 'success', message: '' };

  componentDidMount() {
    console.log(this.props);
    this.setState({ language: this.props.language, code: this.props.value });

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
    console.log('beautify', this.state.language);
    switch (this.state.language) {
      case 'xml':
        this.setState({ code: beautify(this.state.code, { format: 'html' }), language: 'xml' });
        break;
      case 'html':
        this.setState({ code: beautify(this.state.code, { format: 'html' }), language: 'htmlmixed' });
        break;
      case 'json':
        this.setState({ code: beautify(this.state.code, { format: 'json' }), language: 'json' });
        break;
      case 'sql':
        this.setState({ code: sqlFormatter.format(this.state.code), language: 'sql' });
        break;
      case 'css':
        this.setState({ code: beautify(this.state.code, { format: 'css' }), language: 'css' });
        break;
      case 'js':
        this.setState({ code: beautify(this.state.code, { format: 'js' }), language: 'javascript' });
        break;
      case 'jsx':
        this.setState({ code: beautify(this.state.code, { format: 'js' }), language: 'jsx' });
        break;
      case 'ts':
        this.setState({ code: beautify(this.state.code, { format: 'js' }), language: 'javascript' });
        break;
      case 'php':
        //this.setState({ code: unibeautify.loadLanguage('php')});
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
      language: this.state.language,
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
    const { classes, refValue } = this.props;
    const { code, open, message, severity, language } = this.state;
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
