import {BlockTitle, Col, List, ListItem} from "framework7-react";

export const FeaturedFeed = () => {
    return (
        <Col width="0" medium="33">
            <BlockTitle>Featured</BlockTitle>
            <List inset mediaList>
                <ListItem
                    link="#"
                    title="VK"
                    subtitle="We connect people, services and companies"
                    text="VK is the largest social network in Russia and the CIS. Our mission is to connect
                                people, services and companies by creating simple and convenient communication tools."
                />
                <ListItem
                    link="#"
                    title="Sferum"
                    subtitle="Educational platform"
                    text="Your school in digital world. Learn and communicate while staying home!"
                />
            </List>
        </Col>
    );
}