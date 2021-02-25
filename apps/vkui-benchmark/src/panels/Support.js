import {
    Avatar,
    FixedLayout,
    Link,
    Panel,
    PanelHeader,
    RichCell,
    Separator,
    Text,
    WriteBar,
    WriteBarIcon
} from "@vkontakte/vkui";
import {Icon28CameraOutline, Icon28SendOutline, Icon28SmileOutline} from "@vkontakte/icons";
import {useState} from "react";
import {UserContext} from "../index";
import {leadingZero} from "@vkontakte/vkjs";
import {SideButtons} from "../components/SideButtons";

export const Support = (props) => {
    const [messages, setMessages] = useState([
            <>
                <RichCell
                    multiline
                    text={'Support is currently unavailable'}
                    disabled
                    before={<Avatar size={32}
                                    src='https://sun9-30.userapi.com/s/v1/ig1/-lRG01_N_doQuV3Ip0AS4WqAXl0ZEdi9lharaPfTzvQanK1umeYFjuGcSGjYDM5CANdnhdo0.jpg?size=100x0&quality=96&crop=571,107,426,426&ava=1'/>}>
                    <div style={{display: 'flex'}}>
                        <Text>Support team</Text>
                    </div>
                </RichCell>
                <Separator wide/>
            </>
        ]
    );
    const [messageText, setMessageText] = useState("");
    const {id} = props;
    const sendMessage = () => {
        let msgArr = messages;
        let date = new Date();
        msgArr.push(
            <UserContext.Consumer key={msgArr.length}>
                {value =>
                    <RichCell multiline text={messageText} disabled
                              before={<Avatar size={32} src={value.photo_100}/>}>
                        <div style={{display: 'flex'}}><Link>{value.first_name + ' ' + value.last_name}</Link><Text
                            weight='regular' style={{
                            color: 'var(--text_secondary)',
                            marginLeft: 8
                        }}>{date.getHours() + ':' + leadingZero(date.getMinutes())}</Text></div>
                    </RichCell>
                }

            </UserContext.Consumer>
        )
        setMessages(msgArr);
        setMessageText("");
    }

    return (
        <Panel id={id} style={{background: 'white', height: '100%'}}>
            <PanelHeader right={<SideButtons/>}>
                Support
            </PanelHeader>
            <div style={{paddingBottom: 52, background: 'white'}}>
                {messages}
            </div>
            <FixedLayout vertical="bottom" filled>
                <Separator wide/>
                <WriteBar
                    value={messageText}
                    onChange={(e) => {
                        setMessageText(e.target.value)
                    }}
                    before={
                        <WriteBarIcon mode="attach"/>
                    }
                    after={
                        <>
                            <WriteBarIcon>
                                <Icon28SmileOutline/>
                            </WriteBarIcon>

                            <WriteBarIcon>
                                <Icon28CameraOutline/>
                            </WriteBarIcon>

                            <WriteBarIcon mode="send" onClick={() => {
                                sendMessage();
                            }}>
                                <Icon28SendOutline/>
                            </WriteBarIcon>
                        </>
                    }
                    placeholder="Your message here..."
                />
            </FixedLayout>
        </Panel>
    )
}