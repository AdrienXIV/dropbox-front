import React from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
import { getprofil } from "../utils/api";
//import { editprofil } from "../utils/api";
import { setCookie } from '../utils/cookie';

interface P { }
interface S {
User: {email?: string; username?: string, password?: string;}
isLoaded: boolean;
 

}
export default class ModifyProfil extends React.Component<P & WithStyles<Styles>,S> {
  public static Display = withStyles(styles as any)(ModifyProfil) as React.ComponentType<P>;
  constructor(props:any){
    super(props)
    this.state = {
   
      isLoaded: false,
      User : {},
      
    };
  //  this.handleChange =this.handleChange.bind(this)
  }
  async componentDidMount() {
    const { data } = await getprofil(this.state);
    setCookie('token', data.token, 1);

    fetch('localhost:3000/auth/getprofil')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            User: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
          });
        }
      )
  }


  render() {
    const { classes } = this.props;  
    const { User  } = this.state;

    return (
      <div>
    (!isLoaded) ? <div>Chargement…</div> : 
    <Container maxWidth='lg' className={classes.container}>
        <Card className={classes.root}>
          <CardContent className={classes.blockLeft}>
          <form  className={classes.form} noValidate autoComplete='off'>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems='flex-end'>
                  <Grid item>
                    <AlternateEmailIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      name='email'
                      label='Courriel'
                      type='email'
                      value={ User.email} 
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems='flex-end'>
                  <Grid item>
                    <VpnKeyIcon />
                  </Grid>
                  <Grid item>
                  <TextField
                      name='userneme'
                      label='userneme'
                      type='text'
                      value={ User.username} 
                    />
                  </Grid>
                  <Grid item>
                  <TextField
                      name='password'
                      label='password'
                      type='password'
                      value={ User.password} 
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.buttonSignin}>
                <Button type='submit' variant='contained'>brew 
                  Modifier
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
      </div>
    )
    
}
}
