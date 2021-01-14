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
         <div className={classes.contenufooter}>
            <Grid item xs={3}>
              <div className={ classes.listeimg }>
                  <img  className={ classes.listeimg } src="logo-dropbox.png" alt='Dropbox'/> 
              </div>
            </Grid>
          <Grid item xs={3}>
            <div className= {classes.footerp}>
                  <h3>Restons en contact</h3>
                  <ul>
                  <li>01-41-05-73-80</li>
                  <li>Dropbox@imie-paris.fr</li>
                  </ul>
              </div>
           </Grid>
           <Grid item xs={3}>
            <div className={classes.footerp}>
                <h3 >developpé par :</h3>
                <ul>
                    <li> Adrien Maillard </li>
                    <li>Gaye Mboup </li>   
                </ul>              
            </div>
            </Grid>
            
          </div>    
      );
  }
}
