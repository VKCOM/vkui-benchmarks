import {App, Icon, List, ListItem, Page, View} from "framework7-react";
import {useMemo, useState} from "react";
import {AppbarGlobal} from "./components/AppbarGlobal";

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 500; i++) {
            genList.push(
                <ListItem
                    radio
                    radioIcon="end"
                    mediaItem
                    key={i}
                    title="Random Text"
                    subtitle="Grab a cup of coffee"
                >
                    <Icon slot="media" f7="book"/>
                </ListItem>
            )
        }
        setListContent(genList);
    }, [listContent])

    return (
        <App themeDark theme="auto" name="Framework7 Benchmark">
            <AppbarGlobal>
                Burn
            </AppbarGlobal>
            <View>
                <Page>
                    <List virtualList>
                        {listContent}
                    </List>
                </Page>
            </View>
        </App>
    )
}