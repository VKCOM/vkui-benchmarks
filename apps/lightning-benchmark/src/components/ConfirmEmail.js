import {Button, Input, InputIcon} from "@salesforce/design-system-react";

export const ConfirmEmail = (props) => {
    const {onEnter = () => {}, onCancel = () => {}, cancelable = false} = props;
    return (
        <section className="slds-card ConfirmEmail__body">
            <Input
                iconLeft={
                    <InputIcon
                        assistiveText={{
                            icon: 'Code',
                        }}
                        name="apex"
                        category="utility"
                    />
                }
                id="unique-id-1"
                label="You should confirm your email address to keep your account secure"
                placeholder="Your code here"
            />
            <div style={{minHeight: 6}}/>
                <Button variant="brand" onClick={_=>onEnter()}>
                    Submit
                </Button>
                {cancelable && <Button variant="destructive" onClick={_=>onCancel()}>
                    Cancel
                </Button>}
        </section>
    )
}