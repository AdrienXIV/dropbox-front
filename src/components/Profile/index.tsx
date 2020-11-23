import React from 'react';
import { Grid, Paper, Button, Snackbar, withStyles, WithStyles, MenuItem, ListItemIcon, ListItemText, Chip } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';
import Dropzone from 'react-dropzone';
import styles, { Styles } from './styles';
import { sendFiles, getFiles } from '../../utils/api';
import { StyledMenu } from '../Home/styles';
import history from '../../history';
interface P {}
interface S {
  files: string[];
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
  anchorEl: null | HTMLElement;
}
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

export default class Profile extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Profile) as React.ComponentType<P>;
  public state: Readonly<S> = { message: '', open: false, severity: 'success', anchorEl: null, files: [] };

  componentDidMount() {
    getFiles()
      .then(({ data }) => {
        this.setState(prev => ({ ...prev, files: data.files }));
      })
      .catch(err => {
        console.log(err.response);
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
    const { classes } = this.props;
    const { severity, open, message, anchorEl, files } = this.state;

    return (
      <div className={classes.root}>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={6000} open={open} onClose={this.handleClose}>
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
              onClick={this.handleClickMenu}
            >
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
              {files.map((file, index) => (
                <div key={index.toString()} className={classes.file}>
                  <Chip label={file} onClick={() => history.push(`/profil/${file}`)} />
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
