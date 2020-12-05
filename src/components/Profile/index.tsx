import React from 'react';
import {
  Grid,
  Paper,
  Button,
  Snackbar,
  withStyles,
  WithStyles,
  Breadcrumbs,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Link,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FolderIcon from '@material-ui/icons/Folder';
import Dropzone from 'react-dropzone';
import styles, { Styles } from './styles';
import { sendFiles, getFiles, sendFilesInFolder } from '../../utils/api';
import { StyledMenu } from '../Home/styles';
import history from '../../history';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    webkitdirectory?: string;
    directory?: string;
  }
}
interface P {}
interface S {
  path: string[];
  files: string[];
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
  anchorEl: null | HTMLElement;
}
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

//TODO: rafraichir le composant pour refaire une requete afin de mettre à jour l'aperçu des fichiers
export default class Profile extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Profile) as React.ComponentType<P>;
  public state: Readonly<S> = {
    message: '',
    open: false,
    severity: 'success',
    anchorEl: null,
    files: [],
    path: [''],
  };

  componentDidMount() {
    getFiles(this.state.path.join('/'))
      .then(({ data }) => {
        this.setState({ files: data.files });
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  onDrop = (files: File[]) => {
    const formData = new FormData();
    files.forEach(file => {
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
  importFolder = (e: any) => {
    const formData = new FormData();
    const files = e.target.files;
    Object.values(files).forEach((file: any) => {
      formData.append('names', String(file.webkitRelativePath));
      formData.append('myFiles', file, file.webkitRelativePath);
    });
    sendFilesInFolder(formData)
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

  handleClickBreadcrumbs = (value: string) => {
    if (value === 'adri_00@hotmail.fr') this.setState({ path: [''] });
    getFiles(this.state.path.join('/'))
      .then(({ data }) => {
        this.setState({ files: data.files });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  showBreadcrumbs = () => {
    const { classes } = this.props;
    const { path } = this.state;
    return (
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
        <Link
          className={classes.breadcrumb}
          color='inherit'
          onClick={() => this.handleClickBreadcrumbs(' adri_00@hotmail.fr')}>
          adri_00@hotmail.fr
        </Link>
        {path.map((val: string, index: number) => (
          <Link
            key={index.toString()}
            className={classes.breadcrumb}
            color='inherit'
            onClick={() => this.handleClickBreadcrumbs(val)}>
            {val}
          </Link>
        ))}
      </Breadcrumbs>
    );
  };

  render() {
    const { classes } = this.props;
    const { severity, open, message, anchorEl, files } = this.state;

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
                  <input
                    type='file'
                    id='filepicker'
                    name='fileList'
                    webkitdirectory=''
                    directory=''
                    onChange={this.importFolder}
                  />
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
            {this.showBreadcrumbs()}
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
