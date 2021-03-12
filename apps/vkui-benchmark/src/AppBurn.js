import {
    Avatar,
    Cell,
    Group,
    IconButton,
    Panel,
    PanelHeader,
    SplitCol,
    SplitLayout,
    usePlatform,
    View,
    ViewWidth,
    VKCOM
} from "@vkontakte/vkui";
import {useMemo, useState} from "react";
import {Icon20BookOutline, Icon24CheckBoxOff} from "@vkontakte/icons";
import {SideButtons} from "./components/SideButtons";

export const AppBurn = (props) => {
    const [listContent, setListContent] = useState([]);
    const platform = usePlatform();
    const {viewWidth} = props;

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 1000; i++) {
            genList.push(
                <Cell
                    key={'Cell_' + i}
                    before={<Avatar size={36}><Icon20BookOutline/></Avatar>}
                    description="Grab a cup of coffee"
                    selectable
                    after={<IconButton><Icon24CheckBoxOff/></IconButton>}
                >
                    Random text
                </Cell>
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
                            1000 Cells
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