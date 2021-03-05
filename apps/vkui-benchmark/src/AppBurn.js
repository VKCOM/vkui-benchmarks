import {
    Avatar,
    Group, IconButton,
    Panel,
    PanelHeader,
    SimpleCell,
    SplitCol,
    SplitLayout,
    usePlatform,
    View,
    ViewWidth,
    VKCOM
} from "@vkontakte/vkui";
import {useMemo, useState} from "react";
import {Icon20BookOutline, Icon24CheckBoxOn} from "@vkontakte/icons";
import {SideButtons} from "./components/SideButtons";

export const AppBurn = (props) => {
    const [listContent, setListContent] = useState([]);
    const platform = usePlatform();
    const {viewWidth} = props;

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 1000; i++) {
            genList.push(
                <SimpleCell
                    key={'simpleCell_' + i}
                    before={<Avatar size={36}><Icon20BookOutline/></Avatar>}
                    description="Grab a cup of coffee"
                    after={<IconButton><Icon24CheckBoxOn/></IconButton>}
                >
                    Random text
                </SimpleCell>
            )
        }
        setListContent(genList);
    }, [listContent]);

    return (
        <SplitLayout
            style={{justifyContent: "center"}}
            header={platform !== VKCOM && <PanelHeader separator={false}/>}
        >
            <SplitCol spaced maxWidth="720px" animate={viewWidth < ViewWidth.SMALL_TABLET}>
                <View activePanel='panel'>
                    <Panel id='panel'>
                        <PanelHeader right={<SideButtons/>}>
                            1000 SimpleCell's
                        </PanelHeader>
                        <Group>
                            {listContent}
                        </Group>
                    </Panel>
                </View>
            </SplitCol>
        </SplitLayout>
    )
}