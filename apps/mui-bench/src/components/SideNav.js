import {Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";

export const SideNav = ({classes, handleClose, theme, isOpen, nav, setActivePage, activePage}) => {
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={isOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <Typography variant="h6" style={{marginLeft: 12}}>
                    Material UI
                </Typography>
                <IconButton style={{marginLeft: 'auto'}} onClick={handleClose}>
                    {theme.direction === 'ltr' ? <ChevronLeft/> : <ChevronRight/>}
                </IconButton>
            </div>
            <Divider/>
            <List>
                {nav.map((r, key) =>
                    <ListItem key={'side' + key} onClick={() => {
                        setActivePage(r.id);
                    }} button>
                        <ListItemIcon color="primary">{r.icon}</ListItemIcon>
                        <ListItemText primary={r.label}/>
                    </ListItem>
                )}
            </List>
        </Drawer>
    )
}