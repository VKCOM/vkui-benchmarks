import {Avatar, Card, Col} from "antd";

export const FeedPost = ({avatar, children, time, authorName}) => {
    return <Col span={6}>
        <Card>
            <Card.Meta className="FeedPost__meta" avatar={<Avatar src={avatar}/>} title={authorName}
                       description={time}/>
            {children}
        </Card>
    </Col>
}