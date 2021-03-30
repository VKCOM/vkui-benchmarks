import {
    App,
    Block,
    BlockTitle,
    Button,
    List,
    ListGroup,
    ListInput,
    ListItem,
    Page,
    Sheet,
    Toggle,
    View
} from "framework7-react";
import {AppbarGlobal} from "./components/AppbarGlobal";
import {useEffect} from "react";
import {f7ready} from "framework7-react"

export const AppModals = () => {
    const value = "...";

    useEffect(()=>{
        f7ready((f7) => {
            f7.sheet.open(".sheet-user");
        })
    }, []);

    return (
        <App themeDark theme="auto" name="Framework7 Benchmark">
            <AppbarGlobal>
                Modals
            </AppbarGlobal>
            <View>
                <Page>
                    <Block>
                        <Button fill sheetOpen=".sheet-user">Open sheet</Button>
                    </Block>
                </Page>
            </View>

            <Sheet
                className="sheet-countries"
                style={{height: 'auto'}}
                swipeToClose
                backdrop
            >
                <BlockTitle large>
                    Select country
                </BlockTitle>
                <List>
                    {['Russia', 'Ukraine', 'Belarus', 'Kazakhstan', 'Azerbaijan', 'Armenia', 'Georgia', 'Izrael', 'United States'].map(
                        (item, i) => (
                            <ListItem key={i} title={item}>
                                <Toggle slot="after"/>
                            </ListItem>
                        ))
                    }
                </List>
                <Block>
                    <Button sheetClose strong fill>
                        Save
                    </Button>
                </Block>
            </Sheet>

            <Sheet
                className="sheet-user"
                style={{height: 'auto'}}
                swipeToClose
                backdrop
            >
                <BlockTitle large>
                    User info
                </BlockTitle>
                <List>
                    <ListGroup className="sheet-modal-swipe-step">
                        <ListItem title="Personal Data" groupTitle/>
                        <ListInput
                            type="text"
                            placeholder={value}
                            label="Enter your first name"
                        />
                        <ListInput
                            type="text"
                            placeholder={value}
                            label="Enter your last name"
                        />
                    </ListGroup>
                    <ListGroup className="sheet-modal-swipe-step">
                        <ListItem title="Other data" groupTitle/>
                        <ListInput
                            type="text"
                            placeholder="@..."
                            label="Enter your nickname"
                            info={"Others now see you like @id" + value}
                        >
                            @
                        </ListInput>
                        <ListInput
                            type="textarea"
                            label="Bio"
                            placeholder="Your bio here..."
                        />
                    </ListGroup>
                </List>
                <Block>
                    <Button sheetOpen=".sheet-countries" strong fill>
                        Save
                    </Button>
                </Block>
            </Sheet>
        </App>
    )
}