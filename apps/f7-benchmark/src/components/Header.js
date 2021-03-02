import {List, ListItem, Navbar, NavRight, NavTitle} from "framework7-react";
import {UserContext} from "../index";

export const Header = (props) => {
    const {user = false, children = "Loading"} = props;
    return (
        <Navbar>
            <NavTitle>{children}</NavTitle>
            <NavRight>
                {user && <UserContext.Consumer>
                    {value =>
                        <List style={{'--f7-list-bg-color': 'transparent'}} mediaList>
                            <ListItem href="#" sheetOpen=".settings" noChevron mediaItem
                                      title={value.first_name + " " + value.last_name}>
                                <img alt="user avatar" slot="media" width="24" src={value.photo_100}/>
                            </ListItem>
                        </List>
                    }
                </UserContext.Consumer>}
            </NavRight>
        </Navbar>
    )
}