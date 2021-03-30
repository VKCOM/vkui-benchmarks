import {
    Avatar,
    Cell, Checkbox,
    Group,
    Panel,
    SplitCol,
    SplitLayout,
    View,
    ViewWidth,
} from "@vkontakte/vkui";
import {useMemo, useState} from "react";
import {Icon20BookOutline} from "@vkontakte/icons";
import {SideButtons} from "./components/SideButtons";

export const AppBurn = (props) => {
    const [listContent, setListContent] = useState([]);
    const {viewWidth} = props;

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 500; i++) {
            genList.push(
                <Cell
                    key={'Cell_' + i}
                    before={<Avatar size={36}><Icon20BookOutline/></Avatar>}
                    description="Grab a cup of coffee"
                    selectable
                    after={<Checkbox>Checkbox</Checkbox>}
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
        >
            <SplitCol spaced maxWidth="720px" animate={viewWidth < ViewWidth.SMALL_TABLET}>
                <View activePanel='panel'>
                    <Panel id='panel'>
                        <Group>
                            <SideButtons/>
                        </Group>
                        <Group>
                            {listContent}
                        </Group>
                    </Panel>
                </View>
            </SplitCol>
        </SplitLayout>
    )
}