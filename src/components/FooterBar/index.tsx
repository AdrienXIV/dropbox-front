import React from 'react';
import {  withStyles, WithStyles ,Grid} from '@material-ui/core';
import styles, { Styles } from './styles';

interface P {}
// interface S {}

export class FooterBar extends React.Component<P & WithStyles<Styles>> {
  public static Display = withStyles(styles as any)(FooterBar) as React.ComponentType<P>;

  render() {
    const { classes } = this.props;
    return (
      <div className = {classes.footerBar} >
            <div className={classes.root}>
            <Grid container spacing={6}>
              <Grid item xs={3}>
                <div className={classes.paper}>dropbox-imie</div>
              </Grid>  
              <Grid item xs={3}>
                <div className={classes.paper}>by gaye & adrien</div>
              </Grid>      
              <Grid item xs={3}>
                <div className={classes.paper}>by gaye & adrien</div>
              </Grid>
            </Grid>
          </div>
      </div>
      );
  }
}
