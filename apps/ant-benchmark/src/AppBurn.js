import {useMemo, useState} from "react";
import {Content} from "antd/es/layout/layout";
import {GlobalHeader} from "./components/GlobalHeader";
import Radio from "antd/es/radio/radio";
import {Row, Space} from "antd";

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 1000; i++) {
            genList.push(
                <Row>
                    <Radio key={i} value={`value${i}`}>
                        {"ListItem №" + i}
                    </Radio>
                </Row>
            )
        }
        setListContent(genList);
    }, [listContent])

    return (
        <Content>
            <GlobalHeader selectedKey={"1"}/>
            <Space direction="vertical">
                {listContent}
            </Space>
        </Content>
    )
}