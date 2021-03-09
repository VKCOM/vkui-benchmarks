import {Button, Card, Col, Input, Modal, Space} from "antd";
import {useState} from "react";
import {UserContext} from "../index";
import TextArea from "antd/es/input/TextArea";

export const ProfileEdit = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <Col span={12}>
            <Card title="Edit your profile info">
                <Button onClick={_=>setModalVisible(true)}>
                    Edit
                </Button>
                <Modal title="Edit your profile" visible={isModalVisible} onOk={_=>setModalVisible(false)} onCancel={_=>setModalVisible(false)}>
                    <UserContext.Consumer>
                        {value => <Space style={{width: '100%'}} direction="vertical">
                            <Input placeholder={value.first_name}/>
                            <Input placeholder={value.last_name}/>
                            <Input placeholder={value.id}/>
                            <TextArea placeholder="Your bio..."/>
                        </Space>}
                    </UserContext.Consumer>
                </Modal>
            </Card>
        </Col>
    )
}