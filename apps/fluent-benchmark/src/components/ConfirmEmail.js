import {DefaultButton, DocumentCard, PrimaryButton, Stack, TextField} from "@fluentui/react";

export const ConfirmEmail = (props) => {
    const {
        onEnter = () => {
        }, onCancel = () => {
        }, cancelable = false
    } = props;
    return (
        <DocumentCard style={{
            padding: "16px 12px",
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex"
        }}>
            <TextField
                label="You should confirm your email address to keep your account secure"
                placeholder="Your code here"/>
            <Stack gap={8} horizontal style={{padding: "12px 0"}}>
                <PrimaryButton onClick={_ => onEnter()}>
                    Submit
                </PrimaryButton>
                {cancelable && <DefaultButton onClick={_ => onCancel()}>
                    Cancel
                </DefaultButton>}
            </Stack>
        </DocumentCard>
    )
}