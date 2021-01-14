import React from 'react';
import { Grid, Paper, Button, Snackbar, withStyles, WithStyles, MenuItem, Chip } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';
import Dropzone from 'react-dropzone';
import styles, { Styles } from './styles';
import { sendFiles, getFiles, sendFilesInFolder } from '../../utils/api';
import { StyledMenu } from '../Home/styles';
import FolderNavigation from '../FolderNavigation';
import { checkExtension } from '../../utils/checkExtension';
import { setCookie } from '../../utils/cookie';
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
  dirs: string[];
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
  anchorEl: null | HTMLElement;
}
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;
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
    this.getAllFilesWithCurrentPathname();
    console.log(sessionStorage.getItem('pathname'));
  }
  componentDidUpdate() {
    const pathname = this.state.path.join('/') + '/';
    // si on clique sur un dossier on fait la coparaison avec le chemin en session afin de faire une requête pour mettre à jour
    // le contenu
    if (pathname !== sessionStorage.getItem('pathname')) {
      getFiles(pathname)
        .then(({ data }) => {
          this.setState(prev => ({ ...prev, dirs: data.dirs, files: data.files }));
          sessionStorage.setItem('pathname', pathname);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }

  getAllFilesWithCurrentPathname() {
    let pathname = '';
    // si la variable de session existe, on l'utilise pour faire la requête afin de ne pas repartir de 0
    if (sessionStorage.getItem('pathname')) {
      const path = sessionStorage.getItem('pathname')?.split('/') as string[];
      // éviter d'avoir une chaîne vide à la fin
      path.pop();
      // faire la requête => /path/to + /
      pathname = path.join('/') + '/';
      // mise à jour du chemin
      this.setState(prev => ({ ...prev, path }));
    } else {
      // sinon on prend le chemin vide initialisé
      pathname = this.state.path.join('/');
    }

    getFiles(pathname)
      .then(({ data }) => {
        this.setState(prev => ({ ...prev, dirs: data.dirs, files: data.files }));
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          // suppression des cookies + redirection accueil si le token n'est pas bon
          setCookie('token', '', 0);
          setCookie('email', '', 0);
          history.replace('/');
        }
      });
  }

  onDrop = (files: File[]) => {
    const formData = new FormData();
    const errors: string[] = [];
    files.forEach(file => {
      if (checkExtension(file.name as string)) {
        // ajouter le chemin du répertoire où l'on se trouve
        formData.append('pathname', sessionStorage.getItem('pathname') as string | '/');
        // ajout des fichiers
        formData.append('myFiles', file);
      } else {
        // ajout des erreurs si des fichiers ne sont pas au bon format
        errors.push(file.name as string);
      }
    });
    if (errors.length > 0) {
      // affichage de l'erreur s'il y'en a
      this.setState({
        message: `Fichiers [ ${errors.join(' | ')} ] ne sont pas au bon format`,
        severity: 'warning',
        open: true,
      });
    } else {
      sendFiles(formData)
        .then(({ data }) => {
          this.setState({ message: data.message, severity: 'success', open: true });
          this.getAllFilesWithCurrentPathname();
        })
        .catch(err => {
          console.log(err.response);
          this.setState({ message: err.response.data.error, severity: 'error', open: true });
        });
    }
  };

  onDropFolder = (files: File[]) => {
    const formData = new FormData();
    const errors: string[] = [];
    let folder = '';
    files.forEach((file: any) => {
      console.log('file: ', file);
      if (checkExtension(file.name as string)) {
        // ajouter le chemin du répertoire où l'on se trouve
        formData.append('pathname', sessionStorage.getItem('pathname') as string | '/');
        // ajout du nom des fichiers dans le dossier et sous dossiers
        formData.append('names', String(file.webkitRelativePath));
        // ajout des fichiers
        formData.append('myFiles', file);
      } else {
        folder = String(file.webkitRelativePath).split('/')[0];
        // ajout des erreurs si des fichiers ne sont pas au bon format
        errors.push(file.name as string);
      }
    });
    if (errors.length > 0) {
      // affichage de l'erreur s'il y'en a
      this.setState({
        message: `Fichiers [ ${errors.join(' | ')} ] du dossier [ ${folder} ] ne sont pas au bon format`,
        severity: 'warning',
        open: true,
      });
    } else {
      sendFilesInFolder(formData)
        .then(({ data }) => {
          this.setState({ message: data.message, severity: 'success', open: true });
          this.getAllFilesWithCurrentPathname();
        })
        .catch(err => {
          console.log(err.response);
          this.setState({ message: err.response.data.error, severity: 'error', open: true });
        });
    }
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
    this.getAllFilesWithCurrentPathname();
  };

  render() {
    const { classes } = this.props;
    const { severity, open, message, anchorEl, files, dirs, path } = this.state;

    return (
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={severity === 'warning' ? undefined : 6000}
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
              {/* <MenuItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary='Dossier' />
              </MenuItem>
              <div style={{ height: 1, backgroundColor: 'silver' }} /> */}
              <MenuItem>
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input
                        {...getInputProps({
                          accept:
                            '.doc,.docx,.pdf,.html,.css,.js,.jsx,.ts,.tsx,.php,.sql,.xml,.xls,.xlsx,.ppt,.pptx,.json',
                        })}
                      />
                      Importer des fichiers
                    </div>
                  )}
                </Dropzone>
              </MenuItem>
              <MenuItem>
                <Dropzone onDrop={this.onDropFolder}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input
                        {...getInputProps({
                          accept:
                            '.doc,.docx,.pdf,.html,.css,.js,.jsx,.ts,.tsx,.php,.sql,.xml,.xls,.xlsx,.ppt,.pptx,.json',
                        })}
                        webkitdirectory=''
                        directory=''
                      />
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
                  <Chip label={file} onClick={() => window.open(`/tableau-de-bord/${file}`, '_blank')} />
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
