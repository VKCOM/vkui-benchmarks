import {useEffect, useState} from "react";
import {Header, HeaderNav, HeaderNavItem} from "@yandex/ui/Header";
import {UserContext} from "../index";
import {compose} from "@bem-react/core";
import {UserPic as UserPicDesktop, withSizeM} from "@yandex/ui/UserPic/desktop";
import {ModeButtons} from "./ModeButtons";

export const DefaultHeader = ({nav, onChange, value, openProfileModal}) => {
    const [navContent, setContent] = useState([]);
    const UserPic = compose(withSizeM)(UserPicDesktop);

    useEffect(() => {
        const genContent = nav.map((navItem, i) =>
            <HeaderNavItem onClick={() => {
                onChange(navItem.id)
            }} active={value === navItem.id} key={i}>
                {navItem.label}
            </HeaderNavItem>
        );

        return setContent(genContent);
    }, [nav, value, onChange])

    return (
        <nav>
            <Header
                logo="Yandex.UI"
                actions={
                    <UserContext.Consumer>
                        {value =>
                            <>
                                <HeaderNavItem onClick={() => {
                                    openProfileModal()
                                }} icon={<UserPic size="m" alt="user avatar" lodpiUrl={value.photo_100} hidpiUrl={value.photo_200}/>}>
                                    <div className="DefaultHeader__text">
                                        {value.first_name} {value.last_name}
                                    </div>
                                </HeaderNavItem>
                                <ModeButtons/>
                            </>
                        }
                    </UserContext.Consumer>
                }
            >
                <HeaderNav>{navContent}</HeaderNav>
            </Header>
        </nav>
    )
}