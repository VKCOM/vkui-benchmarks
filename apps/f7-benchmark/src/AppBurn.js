import {App, List, ListItem, Page, Toggle, View} from "framework7-react";
import {useState, useMemo} from "react";
import {AppbarGlobal} from "./components/AppbarGlobal";

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 1000; i++) {
            genList.push(
                <ListItem key={i} title={"ListItem №"+i}>
                    <Toggle slot="after"/>
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