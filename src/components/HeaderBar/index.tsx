import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Grid, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import history from "../../history"

interface P { }
// interface S {}

export class HeaderBar extends React.Component<P & WithStyles<Styles>>{

    public static Display = withStyles(styles as any)(HeaderBar) as React.ComponentType<P>
    disconnect = () => {
        localStorage.removeItem('token');
        history.push('/')
        
      };

    render() {
        const menuId = 'primary-search-account-menu';
        const { classes } = this.props;
        return (
        <div className={classes.grow}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
                <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
                Dropbox-IMIE
            </Typography>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput,}} inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                </Badge>
                </IconButton>
                <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" color="inherit">
                <AccountCircle />
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton aria-label="show more" aria-haspopup="true" color="inherit">
                <MoreIcon />
                </IconButton>
            </div>
            <div>
            <Button onClick={this.disconnect}>Se déconnecter</Button>
            </div>
            </Toolbar>
        </AppBar>
    </div>
        )
    }

}