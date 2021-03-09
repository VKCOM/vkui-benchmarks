import {Content} from "antd/es/layout/layout";
import {Button, Modal, Space} from "antd";
import {useState} from "react";
import {GlobalHeader} from "./components/GlobalHeader";
export const AppModals = () => {
    const [selectedModal, setSelectedModal] = useState(0);

    return (
        <Content>
            <GlobalHeader selectedKey={"2"}/>
            <Space>
                <Button onClick={_=>setSelectedModal(1)}>
                    Open Modal
                </Button>
                <Modal title="First modal" visible={selectedModal === 1} onOk={_=>setSelectedModal(2)}>
                    Wow! It's modal #1.
                </Modal>
                <Modal title="Second modal" visible={selectedModal === 2} onOk={_=>setSelectedModal(3)}>
                    Wow! It's modal #2.
                </Modal>
                <Modal title="Third modal" visible={selectedModal === 3} onOk={_=>setSelectedModal(0)}>
                    Wow! It's modal #3.
                </Modal>
            </Space>
        </Content>
    )
}