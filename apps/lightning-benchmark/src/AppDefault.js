import {Navbar} from "./components/Navbar";
import {PageView} from "./components/PageView";
import {useState} from "react";
import {Home} from "./pages/Home";
import {Settings} from "./pages/Settings";
import {TestModal} from "./components/TestModal";

export const AppDefault = () => {
    const [activePage, setActivePage] = useState("home");
    const [modalOpened, setModalOpened] = useState("home");
    return (
        <div className="App">
            <TestModal opened={modalOpened} setter={setModalOpened}/>
            <Navbar setter={setActivePage} activeNav={activePage} user userAction={_=>setModalOpened(true)} nav={[
                {id: "home", label: "Home"},
                {id: "settings", label: "Settings"},
                {id: "support", label: "Support"},
            ]}/>
            <PageView activePage={activePage}>
                <Home id="home"/>
                <Settings id="settings"/>
            </PageView>
        </div>
    )
}