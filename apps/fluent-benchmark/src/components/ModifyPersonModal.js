import {UserContext} from "../index";
import {DefaultButton, PrimaryButton, Stack, TextField} from "@fluentui/react";

export const ModifyPersonModal = ({action}) => {
    return (
        <div style={{padding: 12}}>
            <h1>
                Edit your profile
            </h1>
            <UserContext.Consumer>
                {value => <>
                    <TextField label="First name" placeholder={value.first_name}/>
                    <TextField label="Last name" placeholder={value.last_name}/>
                    <TextField label="Nickname" placeholder={value.id}/>
                    <TextField label="Bio" placeholder="Your bio..."/>
                </>}
            </UserContext.Consumer>
            <br/>
            <Stack gap={8}>
                <PrimaryButton onClick={_ => action()}>
                    Submit
                </PrimaryButton>
                <DefaultButton onClick={_ => action()}>
                    Undo
                </DefaultButton>
            </Stack>
        </div>
    )
}