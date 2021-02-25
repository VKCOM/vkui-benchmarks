import {useMemo, useState} from "react";
import {Group, PanelHeader, SimpleCell, Tabbar, TabbarItem, ViewWidth} from "@vkontakte/vkui";

const SideCol = ({tabs, activeTab, setActiveTab, viewWidth}) => {
    const [content, setContent] = useState([]);
    const isDesktop = viewWidth >= ViewWidth.TABLET;
    const Component = isDesktop ? Group : Tabbar;

    useMemo(() => {
        setContent([]);
        if (isDesktop) {
            setContent(tabs.map((tab, index) => (
                <SimpleCell key={index} onClick={() => {
                    setActiveTab(tab.id)
                }} before={tab.icon} className={activeTab === tab.id ? "SideCol__selected" : null}>
                    {tab.label}
                </SimpleCell>
            )))
        } else {
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
            <Component itemsLayout={viewWidth < ViewWidth.SMALL_TABLET ? 'vertical' : 'horizontal'}>
                {content}
            </Component>
        </>
    )
}

export default SideCol;