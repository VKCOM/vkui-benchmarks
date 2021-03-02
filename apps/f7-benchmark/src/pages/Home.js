import {Page, Row} from "framework7-react";
import {Header} from "../components/Header";
import {FeaturedFeed} from "../components/FeaturedFeed";
import {NewsFeed} from "../components/NewsFeed";

export const Home = () => {
    return (
        <Page>
            <Header user>
                Home
            </Header>
            <Row>
                <NewsFeed/>
                <FeaturedFeed/>
            </Row>
        </Page>
    )
}