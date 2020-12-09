import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { js_beautify, html_beautify } from 'js-beautify';

interface P {
  language: string;
  refValue?: React.RefObject<any>;
}
interface S {
  code: string;
  langage: string;
}

export default class Editor extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Editor) as React.ComponentType<P>;
  public state: Readonly<S> = { code: '', langage: 'html' };

  componentDidMount() {
    this.setState({ langage: this.props.language });
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

  render() {
    const { classes, language, refValue } = this.props;
    const { code } = this.state;
    return (
      <div className={classes.root}>
        <button onClick={this.beautify}>Beautify</button>
        <ControlledEditor
          ref={refValue}
          onBeforeChange={this.onChange}
          value={code}
          className='code-mirror-wrapper'
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
