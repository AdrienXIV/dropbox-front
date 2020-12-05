import React from 'react';
import {  withStyles, WithStyles, CardContent, } from '@material-ui/core';

import styles, { Styles } from './styles';

interface P {}
// interface S {}

export class FooterBar extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(FooterBar) as React.ComponentType<P>;

  render() {
    const { classes } = this.props;
    return (
        <div className = {classes.footerBar}>
              <h1 className = {classes.title}>
                  footer
              </h1>
        </div>
      );
  }
}
