import {useState} from "react";
import {ConfirmEmail} from "../components/ConfirmEmail";
import {Row} from "antd";
import {ProfileEdit} from "../components/ProfileEdit";

export const SettingsPage = (props) => {
    const {id} = props;
    const [shouldContinueSetup, setSetupContinue] = useState(true);

    return (
        <div id={id} style={{padding: 12}}>
            <Row direction="vertical">
                {shouldContinueSetup &&
                    <ConfirmEmail
                        onEnter={_=>setSetupContinue(false)}
                    />
                }
                <ProfileEdit/>
            </Row>
        </div>
    )
}