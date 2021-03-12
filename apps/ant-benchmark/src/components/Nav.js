import Sider from "antd/es/layout/Sider";
import {Menu} from "antd";
import {useEffect, useState} from "react";

export const Nav = ({nav, activeNav, setter}) => {
    const [navContent, setNavContent] = useState(<></>);
    useEffect(() => {
        nav && setNavContent(nav.map((item) => {
            return <Menu.Item
                onClick={_ => {
                    setter(item.id)
                }}
                active={activeNav === item.id}
                key={item.id}>
                {item.label}
            </Menu.Item>
        }))
    }, [nav, activeNav, setter]);

    return (
        <Sider>
            <Menu theme="dark" selectedKeys={activeNav}>
                {navContent}
            </Menu>
        </Sider>
    )
}