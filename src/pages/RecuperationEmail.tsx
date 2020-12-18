import React from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Card,
  withStyles,
  WithStyles,
  Typography,
  CardContent,
  Snackbar,
} from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import styles, { Styles } from './styles';
import { forgetPassword } from "../utils/api";

import history from '../history';
import { Alert, AlertProps } from '@material-ui/lab';

interface P {}
interface S {
  email: string;
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
}

export default class RecuperationEmail extends React.Component<P & WithStyles<Styles>,S> {
    public static Display = withStyles(styles as any)(RecuperationEmail) as React.ComponentType<P>;
    public state: Readonly<S> = { email: '', message: '', open: false, severity: 'success', };
  

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const { data } = await forgetPassword(this.state.email);
          this.setState({open: true, message:data.message})

        } catch (error) {
          console.error(error);
          this.setState({open: true, severity: 'error', message: error.response.data.error});
        }
      };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      handleClose = () => {
        this.setState({ open: false });
      };

      render() {
        const { classes } = this.props;
        const { email } = this.state;
        const {severity, message, open} = this.state;

        return (
        <div>
        <Container>
            <Card className={classes.root}>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={6000} open={open} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <CardContent className={classes.blockLeft}>
                <Typography component='h5' variant='h5' align='center'>
                  confirmer votre email
                </Typography>
                <form onSubmit={this.handleSubmit} className={classes.form} noValidate autoComplete='off'>
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
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.buttonSignin}>
                    <Button type='submit' variant='contained'>
                      Envoyer
                    </Button>
                  </div>
                </form>
                </CardContent >
            </Card>
        </Container>
        </div>
        );
      }
    }
    