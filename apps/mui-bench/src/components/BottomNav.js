import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";

export const BottomNav = (props) => {

    const {tabs, activeTab, setActiveTab, classes} = props;

    return (
        <BottomNavigation
            value={activeTab}
            className={classes.bottomNav}
            onChange={(event, newValue) => {
                setActiveTab(newValue);
            }}
        >
            {tabs.map((r, key) => <BottomNavigationAction key={'tab' + key} value={r.id} label={r.label}
                                                          icon={r.icon}/>)}
        </BottomNavigation>
    )
}