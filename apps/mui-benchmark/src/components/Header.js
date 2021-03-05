import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {AddAlertOutlined, DashboardOutlined, Edit, FireplaceOutlined, Person} from "@material-ui/icons";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Menu} from "@material-ui/core";
import {useState} from "react";
import {UserContext} from "../index";

export const Header = ({open, toggleOpen, classes, children, drawerHidden}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            className={classes && clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                {!drawerHidden && <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleOpen}
                    edge="start"
                    className={classes && clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon/>
                </IconButton>}
                <Typography variant="h6" noWrap>
                    {children}
                </Typography>
                <IconButton style={{marginLeft: 'auto', color: 'black'}} onClick={() => {
                    window.open('/?mode=default', '_self')
                }}>
                    <DashboardOutlined/>
                </IconButton>
                <IconButton style={{color: 'black'}} onClick={() => {
                    window.open('/?mode=burn', '_self')
                }}>
                    <FireplaceOutlined/>
                </IconButton>
                <IconButton style={{color: 'black'}} onClick={() => {
                    window.open('/?mode=modals', '_self')
                }}>
                    <AddAlertOutlined/>
                </IconButton>
                <UserContext.Consumer>
                    {value => value &&
                        <>
                            <IconButton onClick={handleClick} className={classes && classes.personButton} edge="end">
                                <Person/>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <ListItem divider>
                                    <ListItemAvatar>
                                        <Avatar alt="user avatar" src={value.photo_100}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${value.first_name} ${value.last_name}`}
                                        secondary={`${value.country.title}, ${value.city.title}`}
                                    />
                                </ListItem>
                                <List>
                                    <ListItem button onClick={() => {
                                        handleClose();
                                    }}>
                                        <Edit/>
                                        <ListItemText
                                            style={{marginLeft: 12}}
                                            primary={`Edit profile`}
                                        />

                                    </ListItem>
                                </List>
                            </Menu>
                        </>
                    }
                </UserContext.Consumer>
            </Toolbar>
        </AppBar>
    );
}