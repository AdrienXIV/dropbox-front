import React from 'react';
import { Chip, Grid, Paper, Snackbar, withStyles, WithStyles } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Dropzone from 'react-dropzone';
import styles, { Styles } from './styles';
import { sendFiles } from '../../utils/api';

interface P {}
interface S {
  files: File[];
  message: string;
  open: boolean;
  severity: AlertProps['severity'];
}
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

export default class Profile extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Profile) as React.ComponentType<P>;
  public state: Readonly<S> = { files: [], message: '', open: false, severity: 'success' };

  onDrop(files: File[]) {
    const newFiles = this.state.files;
    files.forEach(file => {
      // si le fichier exise déjà, on ne l'ajoute pas
      const index = this.state.files.findIndex(f => f.name == file.name);
      if (index !== -1) newFiles.splice(index, 1);
      newFiles.push(file);
    });
    this.setState({ files: newFiles });
  }

  handleDelete(index: number) {
    const newFiles = this.state.files;
    // suppression du fichier
    newFiles.splice(index, 1);
    this.setState({ files: newFiles });
  }

  handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    const formData = new FormData();
    this.state.files.forEach(file => {
      formData.append('myFiles', file);
    });
    sendFiles(formData)
      .then(({ data }) => {
        console.log(data.message);
        this.setState(prev => ({ ...prev, message: data.message, files: [], severity: 'success', open: true }));
        setTimeout(() => {
          this.setState(prev => ({ ...prev, open: false }));
        }, 5000);
      })
      .catch(err => {
        console.log(err.response);
        this.setState(prev => ({ ...prev, message: err.response.data.error, severity: 'error', open: true }));
        setTimeout(() => {
          this.setState(prev => ({ ...prev, open: false }));
        }, 10000);
      });
  }

  handleClose() {
    this.setState(prev => ({ ...prev, open: false }));
  }

  render() {
    const { classes } = this.props;

    const files = this.state.files.map((file: any, index: number) => (
      <Chip key={index.toString()} label={file.name} onDelete={() => this.handleDelete(index)} variant='outlined' />
    ));
    return (
      <div className={classes.root}>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={this.state.open} onClose={() => this.handleClose()}>
          <Alert onClose={() => this.handleClose()} severity={this.state.severity}>
            {this.state.message}
          </Alert>
        </Snackbar>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Dropzone onDrop={f => this.onDrop(f)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps({ className: 'dropzone' })} className={classes.base}>
                      <input {...getInputProps()} />
                      <p>Glissez les fichiers ici ou cliquez pour les sélectionner</p>
                    </div>
                    <aside>
                      {(() =>
                        this.state.files.length > 0 ? (
                          <>
                            <h4>Fichiers</h4>
                            <div className={classes.files}>{files}</div>
                            <button onClick={e => this.handleSubmit(e)}>Envoyer</button>
                          </>
                        ) : null)()}
                    </aside>
                  </section>
                )}
              </Dropzone>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
