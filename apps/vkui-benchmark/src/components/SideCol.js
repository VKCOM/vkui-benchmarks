import {useMemo, useState} from "react";
import {Group, PanelHeader, SimpleCell, Tabbar, TabbarItem, ViewWidth} from "@vkontakte/vkui";

const SideCol = ({tabs, activeTab, setActiveTab, viewWidth}) => {
    const [content, setContent] = useState([]);
    const [componentProps, setComponentProps] = useState({});
    const isDesktop = viewWidth >= ViewWidth.TABLET;
    const isMobile = viewWidth < ViewWidth.SMALL_TABLET;
    const Component = isDesktop ? Group : Tabbar;

    useMemo(() => {
        setContent([]);
        if (isDesktop) {
            setComponentProps({});
            setContent(tabs.map((tab, index) => (
                <SimpleCell key={index} onClick={() => {
                    setActiveTab(tab.id)
                }} before={tab.icon} className={activeTab === tab.id ? "SideCol__selected" : null}>
                    {tab.label}
                </SimpleCell>
            )))
        } else {
            setComponentProps({itemsLayout: isMobile ? 'vertical' : 'horizontal'});
            setContent(tabs.map((tab, index) => (
                <TabbarItem key={index} onClick={() => {
                    setActiveTab(tab.id)
                }} text={tab.label} selected={activeTab === tab.id}>
                    {tab.icon}
                </TabbarItem>
            )))
        }
    }, [tabs, activeTab, isDesktop, setActiveTab])

    return (
        <>
            {isDesktop && <PanelHeader>VKUI</PanelHeader>}
            <Component {...componentProps}>
                {content}
            </Component>
        </>
    )
}

export default SideCol;