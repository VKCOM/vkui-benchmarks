import {Grid} from "@adobe/react-spectrum";
import {FeaturedItem} from "./FeaturedItem";

export const FeaturedFeed = () => {
    return (
        <Grid gap="size-100">
            <FeaturedItem
                img="https://sun9-40.userapi.com/impg/s2gwpRPjiR3CPhwror6S563MdKwRk8yPocFJmA/YWVaQgf9JkQ.jpg?size=512x512&quality=96&proxy=1&sign=c475fddfe12375444acb518a7dcd224e&type=album"
                title="VK"
                subtitle="We connect people, services and companies"
                text="VK is the largest social network in Russia and the CIS. Our mission is to connect
                                people, services and companies by creating simple and convenient communication tools."
            />
            <FeaturedItem
                img="https://sferum.ru/static/sidebar_promo_card_image_2x.7dfbf52765761f171964194989fe09cc.png"
                title="Sferum"
                subtitle="Educational platform"
                text="Your school in digital world. Learn and communicate while staying home!"
            />
        </Grid>
    )
}