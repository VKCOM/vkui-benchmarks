import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useState} from "react";
import {
    Backdrop,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    useMediaQuery
} from "@material-ui/core";
import {Header} from "./components/Header";
import {SideNav} from "./components/SideNav";
import {BottomNav} from "./components/BottomNav";
import {ContactSupport, Home, Settings} from "@material-ui/icons";
import {PageView} from "./components/PageView";
import {HomePage} from "./pages/HomePage";
import {SettingsPage} from "./pages/SettingsPage";
import {SupportPage} from "./pages/SupportPage";
import {UserContext} from "./index";

const drawerWidth = 280;

export const AppDefault = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: matches && `calc(100% - ${drawerWidth}px)`,
            marginLeft: matches && drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: matches && -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        personButton: {
            color: 'black'
        },
        bottomNav: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%'
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));
    const nav = [
        {id: 'home', icon: <Home/>, label: 'Home'},
        {id: 'settings', icon: <Settings/>, label: 'Settings'},
        {id: 'support', icon: <ContactSupport/>, label: 'Support'},
    ];
    const classes = useStyles();

    const [open, setOpen] = useState(true);
    const [activePage, setActivePage] = useState('home');
    const [imitatingLA, setImitateLA] = useState(false);
    const [isDialogOpened, setDialogOpened] = useState(true);

    const imitateLongAction = (cb = false) => {
        setImitateLA(true);
        setTimeout(() => {
            setImitateLA(false);
            cb && cb();
        }, 1000);
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Backdrop className={classes.backdrop} open={imitatingLA}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Header
                drawerHidden={!matches}
                classes={classes}
                open={open}
                toggleOpen={() => {
                    setOpen(!open)
                }}
            >
                {nav.map(page => page.id === activePage ? page.label : null)}
            </Header>
            {matches &&
            <SideNav
                nav={nav}
                classes={classes}
                theme={theme}
                handleClose={() => {
                    setOpen(!open)
                }}
                isOpen={open}
                activePage={activePage}
                setActivePage={(id) => {
                    setActivePage(id)
                }}
            />
            }
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                <PageView activePage={activePage}>
                    <HomePage id='home' imitateLongAction={imitateLongAction}/>
                    <SettingsPage id='settings' openDialog={() => {
                        setDialogOpened(true)
                    }} imitateLongAction={imitateLongAction}/>
                    <SupportPage id='support'/>
                </PageView>
            </main>
            {!matches && <BottomNav
                classes={classes}
                activeTab={activePage}
                setActiveTab={id => {
                    setActivePage(id);
                }}
                tabs={nav}
            />}
            <Dialog open={isDialogOpened} onClose={_ => {
                setDialogOpened(false)
            }}>
                <DialogTitle>Edit profile data</DialogTitle>
                <DialogContent>
                    <UserContext.Consumer>
                        {value =>
                            <>
                                <TextField
                                    style={{marginBottom: 12}}
                                    label="First Name"
                                    placeholder={value.first_name}
                                    fullWidth
                                />
                                <TextField
                                    style={{marginBottom: 12}}
                                    label="Last Name"
                                    placeholder={value.last_name}
                                    fullWidth
                                />
                                <TextField
                                    style={{marginBottom: 12}}
                                    label="Email"
                                    fullWidth
                                />
                                <TextField
                                    style={{marginBottom: 12}}
                                    label="Phone Number"
                                    fullWidth
                                />
                            </>
                        }
                    </UserContext.Consumer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={_ => {
                        setDialogOpened(false)
                    }} color="primary">
                        Undo
                    </Button>
                    <Button onClick={_ => {
                        setDialogOpened(false)
                    }} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}