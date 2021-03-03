import {defaultTheme, Grid, Provider} from '@adobe/react-spectrum';
import {HeaderView} from "./components/HeaderView";
import {SidebarView} from "./components/SidebarView";
import {PageView} from "./components/PageView";
import {Home} from "./pages/Home";
import {useState} from "react";
import {Settings} from "./pages/Settings";

export const AppDefault = () => {
    const [activePage, setPage] = useState("home");

    return (
        <Provider theme={defaultTheme}>
            <Grid
                areas={['header  header', 'sidebar content', 'footer  footer']}
                columns={['1fr', '8fr']}
                rows={['size-600', 'auto']}
            >
                <HeaderView user>
                    Default
                </HeaderView>
                <SidebarView activeNav={activePage} nav={[
                    {
                        id: "home",
                        label: "Home",
                        action: () => {
                            setPage("home")
                        }
                    },
                    {
                        id: "settings",
                        label: "Settings",
                        action: () => {
                            setPage("settings")
                        }
                    },
                    {
                        id: "support",
                        label: "Support",
                        action: () => {
                            setPage("support")
                        }
                    }
                ]}/>
                <PageView activePage={activePage}>
                    <Home id="home"/>
                    <Settings id="settings"/>
                </PageView>
            </Grid>
        </Provider>
    )
}