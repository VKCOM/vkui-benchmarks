import {FeaturedPost} from "./FeaturedPost";

export const FeaturedFeed = () => {
    return (
        <div className="FeaturedFeed__body">
            <FeaturedPost
                title="VK"
                subtitle="We connect people, services and companies"
                text="VK is the largest social network in Russia and the CIS. Our mission is to connect
                                people, services and companies by creating simple and convenient communication tools."
            />
            <FeaturedPost
                title="Sferum"
                subtitle="Educational platform"
                text="Your school in digital world. Learn and communicate while staying home!"
            />
        </div>
    )
}