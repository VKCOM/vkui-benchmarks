import {FeedPost} from "./FeedPost";
import {Link} from "@vkontakte/vkui";

export const NewsFeed = () => {
    return (
        <>
            {[1, 2, 3, 4, 5, 6].map(key => (
                <FeedPost
                    key={key+"post"}
                    authorName='Григорий Горбовской'
                    avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                    time={"Вчера в 18:30"}
                >
                    Пришло самое время раскрывать карты…<br/>
                    Я теперь официально работаю в <Link>Команде ВКонтакте!</Link><br/><br/>

                    <Link>#vkteam</Link>
                </FeedPost>
            ))}
        </>
    )
}