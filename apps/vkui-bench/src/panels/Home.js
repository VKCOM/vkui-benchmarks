import {CardGrid, Group, Link, Panel, PanelHeader, Placeholder,} from "@vkontakte/vkui";
import {Icon56CakeOutline} from "@vkontakte/icons";
import {useState} from "react";
import {FeedPost} from "../components/FeedPost";
import {ConfirmEmail} from "../components/ConfirmEmail";
import {SideButtons} from "../components/SideButtons";

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
            <CardGrid size="l">
                <FeedPost
                    authorName='Григорий Горбовской'
                    avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                    time={"Вчера в 18:30"}
                >
                    Пришло самое время раскрывать карты…<br/>
                    Я теперь официально работаю в <Link>Команде ВКонтакте!</Link><br/><br/>

                    <Link>#vkteam</Link>
                </FeedPost>
                <FeedPost
                    authorName='Григорий Горбовской'
                    avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                    time={"Вчера в 18:30"}
                >
                    Пришло самое время раскрывать карты…<br/>
                    Я теперь официально работаю в <Link>Команде ВКонтакте!</Link><br/><br/>

                    <Link>#vkteam</Link>
                </FeedPost>
                <FeedPost
                    authorName='Григорий Горбовской'
                    avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                    time={"Вчера в 18:30"}
                >
                    Пришло самое время раскрывать карты…<br/>
                    Я теперь официально работаю в <Link>Команде ВКонтакте!</Link><br/><br/>

                    <Link>#vkteam</Link>
                </FeedPost>
            </CardGrid>
        </Panel>
    )
}