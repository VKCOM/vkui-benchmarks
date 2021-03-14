import {Group, Panel, PanelHeader, Placeholder,} from "@vkontakte/vkui";
import {Icon56CakeOutline} from "@vkontakte/icons";
import {useState} from "react";
import {ConfirmEmail} from "../components/ConfirmEmail";
import {SideButtons} from "../components/SideButtons";
import {NewsFeed} from "../components/NewsFeed";

export const Home = (props) => {
    const {id, imitateLongAction} = props;
    const [shouldContinueSetup, setSetupContinue] = useState(true);

    return (
        <Panel id={id}>
            <PanelHeader right={<SideButtons/>}>
                Home
            </PanelHeader>
            <Group>
                <Placeholder header="Placeholder" icon={<Icon56CakeOutline/>}>
                    Such an amazing thing...
                </Placeholder>
            </Group>
            {shouldContinueSetup &&
            <ConfirmEmail
                cancelable={true}
                onCancel={() => {
                    setSetupContinue(false)
                }}
                onEnter={() => {
                    imitateLongAction(() => {
                        setSetupContinue(false);
                    })
                }}
            />
            }
            <NewsFeed/>
        </Panel>
    )
}