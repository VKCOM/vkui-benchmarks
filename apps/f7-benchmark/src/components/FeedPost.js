import {Card, CardContent, CardHeader} from "framework7-react";

export const FeedPost = ({avatar, children, time, authorName}) => {
    return (

        <Card>
            <CardHeader style={{display: "block", padding: "12px"}}>
                <img
                    alt="post avatar"
                    style={{float: "left", marginRight: 12}}
                    src={avatar}
                    width="44"
                />
                <div style={{fontSize: 15, marginBottom: 2}}>{authorName}</div>
                <div style={{fontSize: 13}}>{time}</div>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}