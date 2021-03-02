import {BlockTitle, List, ListItem, Page} from "framework7-react";
import {Header} from "../components/Header";
import {ConfirmMail} from "../components/ConfirmEmail";
import {useState} from "react";

export const Settings = () => {
    const [shouldContinueSetup, setSetupContinue] = useState(true);

    return (
        <Page>
            <Header user>
                Settings
            </Header>
            {shouldContinueSetup &&
            <>
                <BlockTitle>Important</BlockTitle>
                <ConfirmMail
                    onEnter={() => {
                        setSetupContinue(false)
                    }}
                />
            </>
            }
            <BlockTitle>User info</BlockTitle>
            <List>
                <ListItem
                    sheetOpen=".settings"
                    href="#"
                    onClick={() => {
                    }}
                    footer="First name, Last name, Bio and etc..."
                    title="Modify your personal data"/>
            </List>


        </Page>
    )
}