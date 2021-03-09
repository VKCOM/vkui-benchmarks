import {Row} from "antd";
import {ConfirmEmail} from "../components/ConfirmEmail";
import {useState} from "react";
import {NewsFeed} from "../components/NewsFeed";

export const HomePage = (props) => {
    const {id} = props;
    const [shouldContinueSetup, setSetupContinue] = useState(true);

    return (
        <div id={id} style={{padding: 12}}>
            <Row direction="vertical">
                {shouldContinueSetup &&
                    <ConfirmEmail
                        canceable
                        onEnter={_=>setSetupContinue(false)}
                        onCancel={_=>setSetupContinue(false)}
                    />
                }
            </Row>
            <NewsFeed/>
        </div>
    )
}