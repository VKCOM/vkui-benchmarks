import {
    Flex,
    Heading,
    Text,
    View,
    DialogTrigger,
    Link,
    Dialog,
    Divider,
    Content,
    ButtonGroup,
    TextArea,
    Button,
    Form, TextField
} from "@adobe/react-spectrum";
import {useState} from "react";
import {ConfirmEmail} from "../components/ConfirmEmail";
import {UserContext} from "../index";

export const Settings = () => {
    const [shouldContinueSetup, setSetupContinue] = useState(true);

    return (
        <View>
            <Heading level={1}>
                Settings
            </Heading>
            <Flex gap="size-100" direction="column">
                {shouldContinueSetup &&
                    <ConfirmEmail
                        onEnter={()=>{setSetupContinue(false)}}
                    />
                }
                <View backgroundColor="gray-200" borderRadius="regular" padding="size-100">
                    <Flex justifyContent="space-between">
                        <Text>
                            Modify your account
                        </Text>
                        <DialogTrigger>
                            <Link>Edit</Link>
                            {(close) => (
                                <Dialog>
                                    <Heading>Edit your profile data</Heading>
                                    <Divider />
                                    <Content>
                                        <UserContext.Consumer>
                                            {value => <Form>
                                                <TextField label="First name" placeholder={value.first_name}/>
                                                <TextField label="Last name" placeholder={value.last_name}/>
                                                <TextField label="Nickname" placeholder={"id"+value.id}/>
                                                <TextArea label="Bio" placeholder="Your bio here..."/>
                                            </Form>}
                                        </UserContext.Consumer>
                                    </Content>
                                    <ButtonGroup>
                                        <Button variant="secondary" onPress={close}>
                                            Cancel
                                        </Button>
                                        <Button variant="cta" onPress={close}>
                                            Submit
                                        </Button>
                                    </ButtonGroup>
                                </Dialog>
                            )}
                        </DialogTrigger>
                    </Flex>
                </View>
            </Flex>
        </View>
    )
}