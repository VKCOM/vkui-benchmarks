import {useEffect, useState} from "react";
import {
    Button,
    GlobalHeaderProfile,
    GlobalNavigationBar,
    GlobalNavigationBarLink,
    GlobalNavigationBarRegion, Popover
} from "@salesforce/design-system-react";
import {UserContext} from "../index";

export const Navbar = ({nav, activeNav, setter, user = false, userAction = () => {}}) => {
    const [navContent, setNavContent] = useState(<></>);
    useEffect(() => {
        {nav && setNavContent(nav.map((item) => {
            return <GlobalNavigationBarLink
                onClick={_=>{setter(item.id)}}
                active={activeNav === item.id}
                label={item.label}
                id={item.id}/>
        }))}
    }, [nav, activeNav]);

    return (
        <GlobalNavigationBar>
            <GlobalNavigationBarRegion region="primary" navigation>
                {navContent}
            </GlobalNavigationBarRegion>
            <GlobalNavigationBarRegion region="tertiary">
                <GlobalNavigationBarLink
                    onClick={_=>window.open("/", "_self")}
                    label="Default"
                />
                <GlobalNavigationBarLink
                    onClick={_=>window.open("/?mode=burn", "_self")}
                    label="Burn"
                />
                <GlobalNavigationBarLink
                    onClick={_=>window.open("/?mode=modals", "_self")}
                    label="Modals"
                />
                {user && <UserContext.Consumer>
                    {value => <div style={{padding: 2}}>
                        <GlobalHeaderProfile
                            popover={
                                <Popover
                                    id="popover"
                                    body={<Button onClick={_=>userAction()}>
                                        New opportunity
                                    </Button>}
                                />
                            }
                            avatar={value.photo_100}
                            userName={value.first_name+" "+value.last_name}/>
                    </div>}
                </UserContext.Consumer>}
            </GlobalNavigationBarRegion>
        </GlobalNavigationBar>
    )
}