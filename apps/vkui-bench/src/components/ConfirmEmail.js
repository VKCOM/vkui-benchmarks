import {Button, FormItem, FormLayout, FormLayoutGroup, Group, Header, Input, Link} from "@vkontakte/vkui";

export const ConfirmEmail =
    ({
         onCancel = () => {
         },
         cancelable = false,
         onEnter = () => {
         }
     }) => {

        return (
            <Group
                header={
                    <Header
                        aside={cancelable && <Link onClick={() => {
                            onCancel();
                        }}>Later</Link>}
                        subtitle="You should confirm your email address to keep your account secure"
                    >
                        Continue setup of your account
                    </Header>}>
                <FormLayout>
                    <FormLayoutGroup mode="horizontal">
                        <FormItem>
                            <Input placeholder="Enter your code"/>
                        </FormItem>
                        <FormItem>
                            <Button stretched size="l" onClick={() => {
                                onEnter()
                            }}>
                                Send
                            </Button>
                        </FormItem>
                    </FormLayoutGroup>
                </FormLayout>
            </Group>
        )
    }