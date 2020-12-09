import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
interface P {
  language: string;
  value: string;
  onChange(editor: any, data: any, value: string): any;
}

export default class Editor extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(Editor) as React.ComponentType<P>;

  render() {
    const { classes, language, value, onChange } = this.props;
    return (
      <div className={classes.root}>
        <ControlledEditor
          onBeforeChange={onChange}
          value={value}
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
