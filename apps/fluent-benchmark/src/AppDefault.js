import {Stack} from "@fluentui/react";
import {Header} from "./components/Header";
import {useState} from "react";
import {PageView} from "./components/PageView";
import {FeaturedFeed} from "./components/FeaturedFeed";
import {HomePage} from "./pages/HomePage";
import {SettingsPage} from "./pages/SettingsPage";

export const AppDefault = () => {
    const [activePage, setActivePage] = useState("home");
    return (
        <>
            <Header activeNav={activePage} setter={setActivePage} nav={[
                {key: "home", name: "Home"},
                {key: "settings", name: "Settings"},
                {key: "support", name: "Support"},
            ]}/>
            <Stack horizontal>
                <PageView activePage={activePage}>
                    <HomePage id="home"/>
                    <SettingsPage id="settings"/>
                    <div id="support">
                        support
                    </div>
                </PageView>
                <FeaturedFeed items={[
                    {
                        title: "VK",
                        subtitle: "We connect people, services and companies",
                        text: "VK is the largest social network in Russia and the CIS. Our mission is to connect people, services and companies by creating simple and convenient communication tools.",
                    },
                    {
                        title: "Sferum",
                        subtitle: "Educational platform",
                        text: "Your school in digital world. Learn and communicate while staying home!",
                    }
                ]}/>
            </Stack>
        </>
    )
}