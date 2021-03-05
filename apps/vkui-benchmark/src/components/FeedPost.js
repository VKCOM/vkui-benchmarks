import {Avatar, Card, Div, IconButton, SimpleCell} from "@vkontakte/vkui";
import {Icon28ChevronDownOutline} from "@vkontakte/icons";

export const FeedPost = ({avatar, children, time, authorName}) => {

    return (
        <Card mode="outline">
            <div style={{padding: 4}}>
                <SimpleCell
                    before={<Avatar size={36} alt={authorName} src={avatar}/>}
                    description={time}
                    after={<IconButton><Icon28ChevronDownOutline/></IconButton>}
                >
                    {authorName}
                </SimpleCell>
                <Div>
                    {children}
                </Div>
            </div>
        </Card>
    )
}