import {Group, Header, Link, Panel, PanelHeader,} from "@vkontakte/vkui";
import {ConfirmEmail} from "../components/ConfirmEmail";
import {useState} from "react";
import {SideButtons} from "../components/SideButtons";

export const Settings = (props) => {
    const {id, imitateLongAction, editProfile} = props;
    const [emailConfirmed, setEmailConfirmed] = useState(false);
    return (
        <Panel id={id}>
            <PanelHeader right={<SideButtons/>}>
                Settings
            </PanelHeader>
            {!emailConfirmed && <ConfirmEmail onEnter={() => {
                imitateLongAction(() => {
                    setEmailConfirmed(true);
                });
            }}/>}
            <Group
                header={
                    <Header
                        subtitle="First name, Last name, Bio and etc..."
                        aside={<Link onClick={_ => editProfile()}>Edit</Link>}
                    >
                        Modify your personal data
                    </Header>}
            />
        </Panel>
    )
}