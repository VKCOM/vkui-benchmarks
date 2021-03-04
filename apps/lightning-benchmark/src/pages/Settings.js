import {ConfirmEmail} from "../components/ConfirmEmail";
import {useState} from "react";
import {EditProfileInfo} from "../components/EditProfileInfo";
import {TestModal} from "../components/TestModal";

export const Settings = (props) => {
    const {id} = props;
    const [shouldContinueSetup, setSetupContinue] = useState(true);
    const [modalOpened, setModal] = useState(false);

    return (
        <div id={id} className="SettingsPage">
            {shouldContinueSetup &&
                <ConfirmEmail
                    onEnter={()=>{setSetupContinue(false)}}
                />
            }
            <EditProfileInfo onClick={()=>{
                setModal(true)
            }}/>
            <TestModal opened={modalOpened} setter={setModal}/>
        </div>
    )
}