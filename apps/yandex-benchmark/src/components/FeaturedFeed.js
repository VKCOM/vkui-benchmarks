import {FeaturedCard} from "./FeaturedCard";

export const FeaturedFeed = () => {
    return (
        <section>
            <FeaturedCard
                subtitle="VK"
                header="We connect people, services and companies"
                caption="VK is the largest social network in Russia and the CIS. Our mission is to connect
                                people, services and companies by creating simple and convenient communication tools."
            />
            <FeaturedCard
                subtitle="Sferum"
                header="Educational platform"
                caption="Your school in digital world. Learn and communicate while staying home!"
            />
        </section>
    )
}