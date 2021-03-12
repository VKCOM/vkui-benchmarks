import {Button, Card, Col, Input, Space} from "antd";

export const ConfirmEmail = (props) => {
    const {
        onEnter = () => {
        }, onCancel = () => {
        }, cancelable = false
    } = props;
    return (
        <Col span={12}>
            <Card title="Continue setup of your account">
                <Space direction="vertical">
                    You should confirm your email address to keep your account secure
                    <Input
                        placeholder="Your code here"
                    />
                    <Space>
                        <Button type="brand" onClick={_ => onEnter()}>
                            Submit
                        </Button>
                        {cancelable && <Button variant="destructive" onClick={_ => onCancel()}>
                            Cancel
                        </Button>}
                    </Space>
                </Space>
            </Card>
        </Col>
    )
}