import {Button, Text, View, Form, TextField, Flex, Link} from "@adobe/react-spectrum";

export const ConfirmEmail = (props) => {
    const {onEnter = () => {}, onCancel = () => {}, cancelable = false} = props;
    return (
        <View padding="size-100" backgroundColor="gray-200" borderRadius="regular">
            <Flex justifyContent="space-between">
                <Text>
                    You should confirm your email address to keep your account secure.
                </Text>
                {cancelable && <Link onPress={_ => onCancel()}>
                    Later
                </Link>}
            </Flex>
            <Form>
                <TextField placeholder="Your code from email..."/>
                <Button onPress={_=>onEnter()} variant="cta">
                    Submit
                </Button>
            </Form>
        </View>
    )
}