import {Avatar, Card} from "@salesforce/design-system-react";

export const FeedPost = ({avatar, children, time, authorName}) => {
    return (
        <Card
            icon={<Avatar alt="post avatar" imgSrc={avatar}/>}
            className="FeedPost__body"
            heading={
                <div className="FeedPost__heading">
                    <div className="FeedPost__author">{authorName}</div>
                    <div className="FeedPost__time">{time}</div>
                </div>
            }
        >
            <div className="FeedPost__content">
                {children}
            </div>
        </Card>
    )
}