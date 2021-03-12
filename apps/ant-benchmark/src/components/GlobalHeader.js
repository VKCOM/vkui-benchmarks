import {Header} from "antd/es/layout/layout";
import {Avatar, Menu} from "antd";
import {UserContext} from "../index";

export const GlobalHeader = ({user, selectedKey}) => {
    return (
        <Header style={{display: 'flex'}}>
            {user && <UserContext.Consumer>
                {value => <div style={{display: "flex", color: 'white', alignItems: "center", padding: 12}}>
                    <Avatar src={value.photo_100} style={{marginRight: 12}}/>
                    <div>
                        <div>{value.first_name} {value.last_name}</div>
                    </div>
                </div>}
            </UserContext.Consumer>}
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedKey}>
                <Menu.Item key={"0"} onClick={_ => window.open('/?mode=default', '_self')}>Default</Menu.Item>
                <Menu.Item key={"1"} onClick={_ => window.open('/?mode=burn', '_self')}>Burn</Menu.Item>
                <Menu.Item key={"2"} onClick={_ => window.open('/?mode=modals', '_self')}>Modals</Menu.Item>
            </Menu>
        </Header>
    )
}