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
                >
                    <img
                        alt="VK"
                        slot="media"
                        src="https://sun9-40.userapi.com/impg/s2gwpRPjiR3CPhwror6S563MdKwRk8yPocFJmA/YWVaQgf9JkQ.jpg?size=512x512&quality=96&proxy=1&sign=c475fddfe12375444acb518a7dcd224e&type=album"
                        width="80"
                        height="80"
                    />
                </ListItem>
                <ListItem
                    link="#"
                    title="Sferum"
                    subtitle="Educational platform"
                    text="Your school in digital world. Learn and communicate while staying home!"
                >
                    <img
                        alt="Sferum"
                        slot="media"
                        style={{objectFit: 'cover'}}
                        src="https://sferum.ru/static/sidebar_promo_card_image_2x.7dfbf52765761f171964194989fe09cc.png"
                        width="80"
                        height="80"
                    />
                </ListItem>
            </List>
        </Col>
    );
}