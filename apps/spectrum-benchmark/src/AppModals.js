import {ActionButton, defaultTheme, Provider, View, Dialog, DialogTrigger, Heading, Divider, Content, ButtonGroup, Button, Text, Header} from "@adobe/react-spectrum";
import {HeaderView} from "./components/HeaderView";

export const AppModals = () => {
    return (
        <Provider theme={defaultTheme}>
            <HeaderView>
                Modals (Dialogs)
            </HeaderView>
            <View padding="size-100">
                <DialogTrigger>
                    <ActionButton>Open dialog</ActionButton>
                    {(close) => (
                        <Dialog>
                            <Heading>Wow it's a dialog</Heading>
                            <Header>Connection status: Connected</Header>
                            <Divider />
                            <Content>
                                <Text>Start speed test?</Text>
                            </Content>
                            <ButtonGroup>
                                <ActionButton onPress={close}>Cancel</ActionButton>
                                <DialogTrigger>
                                    <ActionButton>Start</ActionButton>
                                    {(close) => (
                                        <Dialog>
                                            <Heading>Internet Speed Test</Heading>
                                            <Header>Connection status: Connected</Header>
                                            <Divider />
                                            <Content>
                                                <Text>Start speed test?</Text>
                                            </Content>
                                            <ButtonGroup>
                                                <Button variant="secondary" onPress={close}>
                                                    Cancel
                                                </Button>
                                                <Button variant="cta" onPress={close}>
                                                    Confirm
                                                </Button>
                                            </ButtonGroup>
                                        </Dialog>
                                    )}
                                </DialogTrigger>
                            </ButtonGroup>
                        </Dialog>
                    )}
                </DialogTrigger>
            </View>
        </Provider>
    )
}