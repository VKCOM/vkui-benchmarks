import {ConfirmEmail} from "../components/ConfirmEmail";
import {FeedPost} from "../components/FeedPost";
import {Link as LinkDesktop, withViewDefault} from "@yandex/ui/Link/desktop";
import {compose} from "@bem-react/core";
import {useState} from "react";

export const HomePage = (props) => {
    const {id} = props;
    const [shouldConfirm, setConfirm] = useState(true);
    const Link = compose(withViewDefault)(LinkDesktop)

    return (
        <div id={id} className="Page">
            {shouldConfirm && <ConfirmEmail
                cancelable
                onEnter={() => {
                    setConfirm(false);
                }}
                onCancel={() => {
                    setConfirm(false);
                }}
            />}
            <FeedPost
                authorName='Григорий Горбовской'
                avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                time={"Вчера в 18:30"}
            >
                Пришло самое время раскрывать карты…<br/>
                Я теперь официально работаю в <Link view="default">Команде ВКонтакте!</Link><br/><br/>

                <Link view="default">#vkteam</Link>
            </FeedPost>
            <FeedPost
                authorName='Григорий Горбовской'
                avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                time={"Вчера в 18:30"}
            >
                Пришло самое время раскрывать карты…<br/>
                Я теперь официально работаю в <Link view="default">Команде ВКонтакте!</Link><br/><br/>

                <Link view="default">#vkteam</Link>
            </FeedPost>
            <FeedPost
                authorName='Григорий Горбовской'
                avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                time={"Вчера в 18:30"}
            >
                Пришло самое время раскрывать карты…<br/>
                Я теперь официально работаю в <Link view="default">Команде ВКонтакте!</Link><br/><br/>

                <Link view="default">#vkteam</Link>
            </FeedPost>
        </div>
    )
}