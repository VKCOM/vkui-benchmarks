import {useMemo, useState} from "react";
import {Content} from "antd/es/layout/layout";
import {GlobalHeader} from "./components/GlobalHeader";
import {Avatar, Checkbox, List, Radio} from "antd";
import {BookOutlined} from "@ant-design/icons";

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 500; i++) {
            genList.push(
                {
                    title: "Random text",
                    description: "Grab a cup of coffee"
                }
            )
        }
        setListContent(genList);
    }, [listContent])

    return (
        <Content>
            <GlobalHeader selectedKey={"1"}/>
            <List
                size="large"
                itemLayout="horizontal"
                dataSource={listContent}
                renderItem={item => (
                    <List.Item actions={[
                        <Radio>radio</Radio>,
                        <Checkbox>checkbox</Checkbox>,
                    ]}>
                        <List.Item.Meta
                            avatar={<Avatar size={48} icon={<BookOutlined/>}/>}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </Content>
    )
}