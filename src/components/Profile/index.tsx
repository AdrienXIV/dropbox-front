import React from 'react';
import { Chip, withStyles, WithStyles } from '@material-ui/core';
import Dropzone from 'react-dropzone';
import styles, { Styles } from './styles';
import { sendFiles } from '../../utils/api';

interface P {}
interface S {
  files: File[];
  message?: string;
}
export default class Profile extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(Profile) as React.ComponentType<P>;

  constructor(props: any) {
    super(props);
    this.state = {
      files: [],
    };
  }
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
    sendFiles(formData).then(res => {
      console.log(res.data.message);
    });
  }

  render() {
    const { classes } = this.props;
    const files = this.state.files.map((file: any, index: number) => (
      <Chip key={index.toString()} label={file.name} onDelete={() => this.handleDelete(index)} variant='outlined' />
    ));
    return (
      <div>
        <Dropzone onDrop={f => this.onDrop(f)}>
          {({ getRootProps, getInputProps }) => (
            <section className='container'>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag n drop some files here, or click to select files</p>
              </div>
              <aside>
                <h4>Fichiers</h4>
                <div className={classes.root}>{files}</div>
              </aside>
            </section>
          )}
        </Dropzone>
        <button onClick={e => this.handleSubmit(e)}>Envoyer</button>
      </div>
    );
  }
}
