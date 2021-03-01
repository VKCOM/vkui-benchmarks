import {useState} from "react";
import {ConfirmEmail} from "../components/ConfirmEmail";
import {ProfileEditBlock} from "../components/ProfileEditBlock";

export const SettingsPage = (props) => {
    const {id, toggleProfileModal} = props;
    const [confirmed, setConfirmed] = useState(false);

    return (
        <div id={id} className="Page">
            {!confirmed && <ConfirmEmail
                onEnter={() => {
                    setConfirmed(true)
                }}
            />}
            <ProfileEditBlock onClick={() => {
                toggleProfileModal()
            }}/>
        </div>
    )
}