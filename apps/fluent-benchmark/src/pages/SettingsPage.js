import {ConfirmEmail} from "../components/ConfirmEmail";
import {useState} from "react";
import {ModifyPerson} from "../components/ModifyPerson";

export const SettingsPage = (props) => {
    const {id} = props;
    const [shouldContinueSetup, setSetupContinue] = useState(true);
    return (
        <div id={id} className="NewsFeed">
            {shouldContinueSetup &&
            <ConfirmEmail
                cancelable
                onEnter={_ => setSetupContinue(false)}
                onCancel={_ => setSetupContinue(false)}
            />
            }
            <ModifyPerson/>
        </div>
    )
}