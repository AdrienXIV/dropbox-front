import React from 'react';
import { withStyles, WithStyles, Breadcrumbs, Link } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles, { Styles } from './styles';
import { getCookie } from '../../utils/cookie';

interface P {
  path: string[];
  handleClickBreadcrumbs(index: number): void;
}
interface S {}

export default class FolderNavigation extends React.Component<P & WithStyles<Styles>, S> {
  public static Display = withStyles(styles as any)(FolderNavigation) as React.ComponentType<P>;

  render() {
    const { classes, path, handleClickBreadcrumbs } = this.props;
    return (
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
        <Link className={classes.breadcrumb} color='inherit' onClick={() => handleClickBreadcrumbs(-1)}>
          {`${getCookie('email') || '/'}`}
        </Link>
        {path.map((val: string, index: number) => {
          return val !== '' ? (
            <Link
              key={index.toString()}
              className={classes.breadcrumb}
              color='inherit'
              onClick={() => handleClickBreadcrumbs(index)}>
              {val}
            </Link>
          ) : null;
        })}
      </Breadcrumbs>
    );
  }
}
