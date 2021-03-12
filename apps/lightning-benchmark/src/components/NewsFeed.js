import {ConfirmEmail} from "./ConfirmEmail";
import {FeedPost} from "./FeedPost";
import {useState} from "react";

export const NewsFeed = () => {
    const [shouldContinueSetup, setSetupContinue] = useState(true);

    return (
        <div className="NewsFeed__body">
            {shouldContinueSetup &&
                <ConfirmEmail
                    cancelable
                    onEnter={()=>{setSetupContinue(false)}}
                    onCancel={()=>{setSetupContinue(false)}}
                />
            }
            {[1, 2, 3, 4, 5, 6].map(key => (
                <FeedPost
                    key={key}
                    authorName='Григорий Горбовской'
                    avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                    time="Вчера в 18:30"
                >
                    Пришло самое время раскрывать карты…<br/>
                    Я теперь официально работаю в <a href>Команде ВКонтакте!</a><br/><br/>

                    <a href>#vkteam</a>
                </FeedPost>
            ))}
        </div>
    )
}