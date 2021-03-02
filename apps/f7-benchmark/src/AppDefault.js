import {
    App,
    Block,
    BlockTitle,
    Button,
    f7,
    Link,
    List,
    ListGroup,
    ListInput,
    ListItem,
    Sheet,
    View,
    Views
} from "framework7-react";
import {Home} from "./pages/Home";
import {useEffect, useState} from "react";
import {Settings} from "./pages/Settings";
import {Support} from "./pages/Support";
import {UserContext} from "./index";
import {AppbarGlobal} from "./components/AppbarGlobal";

export const AppDefault = () => {
    const [page, setPage] = useState("home");

    useEffect(() => {
        f7.sheet.open(".settings");
    }, [])

    return (
        <App themeDark theme="auto" name="Framework7 Benchmark">
            <AppbarGlobal center={<div style={{display: "flex", gap: 8}}>
                <Link onClick={_ => setPage('home')}>Home</Link>
                <Link onClick={_ => setPage('settings')}>Settings</Link>
                <Link onClick={_ => setPage('support')}>Support</Link>
            </div>}>
                Default
            </AppbarGlobal>

            <Views>
                <View main>
                    {page === "home" && <Home/>}
                    {page === "settings" && <Settings/>}
                    {page === "support" && <Support/>}
                </View>
            </Views>

            <Sheet
                className="settings"
                style={{height: 'auto'}}
                swipeToClose
                backdrop
            >
                <BlockTitle large>
                    User info
                </BlockTitle>
                <UserContext.Consumer>
                    {value => <List>
                        <ListGroup className="sheet-modal-swipe-step">
                            <ListItem title="Personal Data" groupTitle/>
                            <ListInput
                                type="text"
                                placeholder={value.first_name}
                                label="Enter your first name"
                            />
                            <ListInput
                                type="text"
                                placeholder={value.last_name}
                                label="Enter your last name"
                            />
                        </ListGroup>
                        <ListGroup className="sheet-modal-swipe-step">
                            <ListItem title="Other data" groupTitle/>
                            <ListInput
                                type="text"
                                placeholder="@..."
                                label="Enter your nickname"
                                info={"Others now see you like @id" + value.id}
                            >
                                @
                            </ListInput>
                            <ListInput
                                type="textarea"
                                label="Bio"
                                placeholder="Your bio here..."
                            />
                        </ListGroup>
                    </List>}
                </UserContext.Consumer>
                <Block>
                    <Button strong fill>
                        Save
                    </Button>
                </Block>
            </Sheet>
        </App>
    )
}