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
         <div className={classes.contenufooter}>
            <div className={ classes.listeimg }>
                 <img  src="favicon.ico"/> 
            </div>
          <div className= {classes.footerContact}>
                <h3>Restons en contact</h3>
                <p>01-41-05-73-80</p>
                <p>Dropbox@imie-paris.fr</p>
                <p>70 rue de Marius Aufan,
                   Levallois-Perret  , France</p>
            </div>
           
            <div className={classes.footerh3}>
                <h3>developper par :</h3>
                <ul className={classes.develop}>
                    <li>✔️ Adrien Maillard </li>
                    <li>✔️ Gaye Mboup </li>                 
                </ul>
            </div>

          </div>    
      </div>
      );
  }
}
