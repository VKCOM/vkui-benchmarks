import {Grid} from "@adobe/react-spectrum";
import {FeaturedItem} from "./FeaturedItem";

export const FeaturedFeed = () => {
    return (
        <Grid gap="size-100">
            <FeaturedItem
                title="VK"
                subtitle="We connect people, services and companies"
                text="VK is the largest social network in Russia and the CIS. Our mission is to connect
                                people, services and companies by creating simple and convenient communication tools."
            />
            <FeaturedItem
                title="Sferum"
                subtitle="Educational platform"
                text="Your school in digital world. Learn and communicate while staying home!"
            />
        </Grid>
    )
}