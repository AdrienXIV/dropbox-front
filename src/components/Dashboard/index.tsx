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
import { getCookie } from '../../utils/cookie';
import FolderNavigation from '../FolderNavigation';

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
  dirs: string[];
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
  anchorEl: null | HTMLElement;
}
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;
//TODO: séparer le composant "showBreadcrumbs" pour afficher le menu de navigation dans les dossiers du dropbox partout
//TODO: rafraichir le composant pour refaire une requete afin de mettre à jour l'aperçu des fichiers
export default class Profile extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Profile) as React.ComponentType<P>;
  public state: Readonly<S> = {
    message: '',
    open: false,
    severity: 'success',
    anchorEl: null,
    files: [],
    dirs: [],
    path: [],
  };

  componentDidMount() {
    let pathname = '';
    // si la variable de session existe, on l'utilise pour faire la requête afin de ne pas repartir de 0
    if (sessionStorage.getItem('pathname')) {
      const path = sessionStorage.getItem('pathname')?.split('/') as string[];
      // éviter d'avoir une chaîne vide à la fin
      path.pop();
      // faire la requête => /path/to + /
      pathname = path.join('/') + '/';
      // mise à jour du chemin
      this.setState({ path });
    } else {
      // sinon on prend le chemon vide initialisé
      pathname = this.state.path.join('/');
    }

    getFiles(pathname)
      .then(({ data }) => {
        this.setState({ dirs: data.dirs });
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

  onDropFolder = (files: File[]) => {
    const formData = new FormData();
    files.forEach((file: any) => {
      formData.append('names', String(file.webkitRelativePath));
      formData.append('myFiles', file);
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

  handleClickBreadcrumbs = (index: number) => {
    let path = this.state.path;
    // si l'on clique sur la racine du fichier, on réinitialise le tableau
    if (index + 1 === 0) path = [];
    // sinon on supprime la ou les cases d'après celle que l'on a cliqué
    else path = path.slice(0, index + 1);

    const pathname = path.join('/') + '/';
    sessionStorage.setItem('pathname', pathname);
    getFiles(pathname)
      .then(({ data }) => {
        this.setState(prev => ({ ...prev, files: data.files, dirs: data.dirs, path }));
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  render() {
    const { classes } = this.props;
    const { severity, open, message, anchorEl, files, dirs, path } = this.state;

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
              style={{ backgroundColor: '#2c3e50', color: 'white' }}
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
              <MenuItem>
                <Dropzone onDrop={this.onDropFolder}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} webkitdirectory='' directory='' />
                      Importer un dossier
                    </div>
                  )}
                </Dropzone>
              </MenuItem>
            </StyledMenu>
          </Grid>
          <Grid item xs={10}>
            <FolderNavigation.Display path={path} handleClickBreadcrumbs={this.handleClickBreadcrumbs} />
            <Paper className={classes.paper}>
              {dirs &&
                dirs.map((dir, index) => (
                  <div key={index.toString()} className={classes.file}>
                    <Button
                      startIcon={<FolderIcon />}
                      onClick={() => {
                        this.setState({ path: [...path, dir] });
                      }}>
                      {dir}
                    </Button>
                  </div>
                ))}
              {files.map((file, index) => (
                <div key={index.toString()} className={classes.file}>
                  <Chip label={file} onClick={() => history.push(`/tableau-de-bord/${file}`)} />
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
