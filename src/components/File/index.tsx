import React from 'react';
import {
  Grid,
  Paper,
  Button,
  Snackbar,
  withStyles,
  WithStyles,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';
import Dropzone from 'react-dropzone';
import styles, { Styles } from './styles';
import { sendFiles, getFile } from '../../utils/api';
import { StyledMenu } from '../Home/styles';
import Editor from '../Editor';
import history from '../../history';

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
    console.log('pathname: ', pathname);
    // récupérer le nom du fichier
    const filename = this.props.match.params.file;
    console.log('filename: ', filename);
    getFile(pathname, filename).then(({ data }) => {
      if (!data.isCode) {
        this.setState({ file: 'data:application/pdf;base64, ' + data.file, isCode: false });
      } else {
        const language = data.ext ==='html'?'xml' : data.ext 
        this.setState({ file: data.file, isCode: true, language });
      }
    });
  }

  onDrop = (files: File[]) => {
    const formData = new FormData();
    files.forEach(file => {
      // si le fichier exise déjà, on ne l'ajoute pas
      formData.append('myFiles', file);
    });
    sendFiles(formData)
      .then(({ data }) => {
        this.setState({ message: data.message, severity: 'success', open: true });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({ message: err.response.data.error, severity: 'error', open: true });
      });
  };
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
    const { severity, open, message, anchorEl, file, isCode, language } = this.state;
    console.log(history);
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
          <Grid item xs={2}>
            <Button
              aria-controls='simple-menu'
              aria-haspopup='true'
              startIcon={<AddIcon />}
              color='primary'
              variant='contained'
              className={classes.button}
              onClick={this.handleClickMenu}>
              Nouveau
            </Button>
            <StyledMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleCloseMenu}>
              <MenuItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary='Dossier' />
              </MenuItem>
              <div style={{ height: 1, backgroundColor: 'silver' }} />
              <MenuItem>
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} />
                      Importer des fichiers
                    </div>
                  )}
                </Dropzone>
              </MenuItem>
            </StyledMenu>
          </Grid>
          <Grid item xs={10}>
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
