import {Layout} from "antd";
import {GlobalHeader} from "./components/GlobalHeader";
import {Nav} from "./components/Nav";
import {useState} from "react";
import {PageView} from "./components/PageView";
import {HomePage} from "./pages/HomePage";
import {FeaturedFeed} from "./components/FeaturedFeed";
import {SettingsPage} from "./pages/SettingsPage";

export const AppDefault = () => {
    const [activePage, setActivePage] = useState("home");
    return (
        <Layout>
            <GlobalHeader selectedKey={"0"} user/>
            <Layout>
                <Nav setter={setActivePage} activeNav={activePage} user nav={[
                    {id: "home", label: "Home"},
                    {id: "settings", label: "Settings"},
                    {id: "support", label: "Support"},
                ]}/>
                <PageView activePage={activePage}>
                    <HomePage id="home"/>
                    <SettingsPage id="settings"/>
                </PageView>
                <FeaturedFeed items={[
                    {
                        title: "VK",
                        subtitle: "We connect people, services and companies",
                        text: "VK is the largest social network in Russia and the CIS. Our mission is to connect people, services and companies by creating simple and convenient communication tools.",
                        image: "https://sun9-40.userapi.com/impg/s2gwpRPjiR3CPhwror6S563MdKwRk8yPocFJmA/YWVaQgf9JkQ.jpg?size=512x512&quality=96&proxy=1&sign=c475fddfe12375444acb518a7dcd224e&type=album"
                    },
                    {
                        image: "https://sferum.ru/static/sidebar_promo_card_image_2x.7dfbf52765761f171964194989fe09cc.png",
                        title: "Sferum",
                        subtitle: "Educational platform",
                        text: "Your school in digital world. Learn and communicate while staying home!",
                    }
                ]}/>
            </Layout>
        </Layout>
    )
}