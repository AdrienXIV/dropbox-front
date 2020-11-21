import React from 'react';
import {
  Grid,
  Paper,
  Button,
  Menu,
  Snackbar,
  withStyles,
  WithStyles,
  MenuItem,
  MenuProps,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';
import Dropzone from 'react-dropzone';
import styles, { Styles } from './styles';
import { sendFiles } from '../../utils/api';

interface P {}
interface S {
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
  anchorEl: null | HTMLElement;
}
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

export default class Profile extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Profile) as React.ComponentType<P>;
  public state: Readonly<S> = { message: '', open: false, severity: 'success', anchorEl: null };

  onDrop(files: File[]) {
    const formData = new FormData();
    files.forEach(file => {
      // si le fichier exise déjà, on ne l'ajoute pas
      formData.append('myFiles', file);
    });
    sendFiles(formData)
      .then(({ data }) => {
        console.log(data.message);
        this.setState({ message: data.message, severity: 'success', open: true });
        setTimeout(() => {
          this.setState({ open: false, message: '' });
        }, 5000);
      })
      .catch(err => {
        console.log(err.response);
        this.setState({ message: err.response.data.error, severity: 'error', open: true });
        setTimeout(() => {
          this.setState({ open: false, message: '' });
        }, 10000);
      });
  }
  handleClickMenu(event: React.MouseEvent<HTMLElement>) {
    this.setState({ anchorEl: event.currentTarget });
  }
  handleCloseMenu() {
    this.setState({ anchorEl: null });
  }
  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    const { severity, open, message, anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} onClose={() => this.handleClose()}>
          <Alert onClose={() => this.handleClose()} severity={severity}>
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
              onClick={e => this.handleClickMenu(e)}
            >
              Nouveau
            </Button>
            <StyledMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => this.handleCloseMenu()}>
              <MenuItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary='Dossier' />
              </MenuItem>
              <div style={{ height: 1, backgroundColor: 'silver' }} />
              <MenuItem>
                <Dropzone onDrop={f => this.onDrop(f)}>
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
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
