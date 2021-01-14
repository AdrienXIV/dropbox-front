import React from 'react';
import { Grid, Paper, Snackbar, withStyles, WithStyles } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import styles, { Styles } from './styles';
import { getFile } from '../../utils/api';
import Editor from '../Editor';
import history from '../../history';
import { setCookie } from '../../utils/cookie';

interface P {
  match: {
    params: {
      file: string;
    };
  };
}
interface S {
  file: string;
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
  anchorEl: null | HTMLElement;
  isCode: boolean;
  language: string;
}
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

export default class ShowFile extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(ShowFile) as React.ComponentType<P>;
  public state: Readonly<S> = {
    message: '',
    open: false,
    severity: 'success',
    anchorEl: null,
    file: '',
    isCode: false,
    language: 'xml',
  };

  componentDidMount() {
    // récupérer le chemin du fichier
    const pathname = sessionStorage.getItem('pathname') ? (sessionStorage.getItem('pathname') as string) : '';
    // récupérer le nom du fichier
    const filename = this.props.match.params.file;
    getFile(pathname, filename)
      .then(({ data }) => {
        if (!data.isCode) {
          this.setState({ file: 'data:application/pdf;base64, ' + data.file, isCode: false });
        } else {
          this.setState({ file: data.file, isCode: true, language: data.ext });
        }
      })
      .catch(error => {
        console.log('error: ', error);
        if (error.response.status === 401 || error.response.status === 403) {
          // suppression des cookies + redirection accueil si le token n'est pas bon
          setCookie('token', '', 0);
          setCookie('email', '', 0);
          history.replace('/');
        }
      });
  }

  handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, match } = this.props;
    const { severity, open, message, file, isCode, language } = this.state;

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
        <Grid container justify='center'>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {isCode ? (
                <Editor.Display refValue={undefined} value={file} language={language} filename={match.params.file} />
              ) : (
                <iframe src={file} height='100%' width='100%' />
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
