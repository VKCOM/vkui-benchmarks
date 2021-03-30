import {defaultTheme, Provider, View, Dialog, Heading, Divider, Content, ButtonGroup, Button, Text, Header, DialogContainer} from "@adobe/react-spectrum";
import {HeaderView} from "./components/HeaderView";
import {useState} from "react";

export const AppModals = () => {
    const [isOpen, setOpen] = useState(1);

    return (
        <Provider theme={defaultTheme}>
            <HeaderView>
                Modals (Dialogs)
            </HeaderView>
            <View padding="size-100">
                <Button variant="cta" onPress={_=>setOpen(1)}>
                    Open modal please
                </Button>
                <DialogContainer onDismiss={_=>setOpen(0)}>
                    {isOpen === 1 && <Dialog>
                        <Heading>Wow it's a dialog</Heading>
                        <Header>Connection status: Connected</Header>
                        <Divider/>
                        <Content>
                            <Text>Start speed test?</Text>
                        </Content>
                        <ButtonGroup>
                            <Button variant="secondary" onPress={_ => setOpen(0)}>Cancel</Button>
                            <Button variant="cta" onPress={_ => setOpen(2)}>Start</Button>
                        </ButtonGroup>
                    </Dialog>}
                </DialogContainer>
                <DialogContainer onDismiss={_=>setOpen(0)}>
                    {isOpen === 2 && <Dialog>
                        <Heading>Internet Speed Test</Heading>
                        <Header>Connection status: Connected</Header>
                        <Divider/>
                        <Content>
                            <Text>Do you really want to start speed test?</Text>
                        </Content>
                        <ButtonGroup>
                            <Button variant="secondary" onPress={_ => setOpen(1)}>
                                Cancel
                            </Button>
                            <Button variant="cta" onPress={_ => setOpen(0)}>
                                Confirm
                            </Button>
                        </ButtonGroup>
                    </Dialog>}
                </DialogContainer>
            </View>
        </Provider>
    )
}