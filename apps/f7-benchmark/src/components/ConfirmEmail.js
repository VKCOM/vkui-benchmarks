import {AccordionContent, Link, List, ListButton, ListInput, ListItem} from "framework7-react";

export const ConfirmMail = (props) => {
    const {
        onEnter = () => {
        },
        onCancel = () => {
        },
        cancelable = false,
    } = props;

    return (
        <List accordionList>
            <ListItem accordionItem after={cancelable && <Link onClick={() => {
                onCancel()
            }}>Later</Link>} title="Continue setup of your account">
                <AccordionContent>
                    <List>
                        <ListInput
                            type="password"
                            placeholder="Enter your code"
                            info="You should confirm your email address to keep your account secure."
                        />
                        <ListButton onClick={() => {
                            onEnter()
                        }}>
                            Submit code
                        </ListButton>
                    </List>
                </AccordionContent>
            </ListItem>
        </List>
    )
}