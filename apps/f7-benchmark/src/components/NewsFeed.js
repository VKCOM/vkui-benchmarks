import {Block, BlockTitle, Col, Link} from "framework7-react";
import {ConfirmMail} from "./ConfirmEmail";
import {FeedPost} from "./FeedPost";
import {useState} from "react";

export const NewsFeed = () => {
    const [shouldContinueSetup, setSetupContinue] = useState(true);

    return (
        <Col width="100" medium="66">
            {shouldContinueSetup &&
            <>
                <BlockTitle>Important</BlockTitle>
                <ConfirmMail
                    onEnter={() => {
                        setSetupContinue(false)
                    }}
                    cancelable
                    onCancel={() => {
                        setSetupContinue(false)
                    }}
                />
            </>
            }
            <BlockTitle>News</BlockTitle>
            <Block>
                {[1, 2, 3].map(key => (
                    <FeedPost
                        key={key}
                        authorName='Григорий Горбовской'
                        avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                        time="Вчера в 18:30"
                    >
                        Пришло самое время раскрывать карты…<br/>
                        Я теперь официально работаю в <Link>Команде ВКонтакте!</Link><br/><br/>

                        <Link>#vkteam</Link>
                    </FeedPost>
                ))}
            </Block>
        </Col>
    );
}