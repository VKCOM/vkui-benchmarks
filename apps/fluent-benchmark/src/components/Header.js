import {CommandBar} from "@fluentui/react";
import {useEffect, useState} from "react";

export const Header = (props) => {
    const {nav, activeNav, setter} = props;
    const farItems = [
        {
            key: 'default',
            text: 'Default',
            href: '/?mode=default',
        },
        {
            key: 'burn',
            text: 'Burn',
            href: '/?mode=burn',
        },
        {
            key: 'modals',
            text: 'Modals',
            href: '/?mode=modals',
        },
    ];
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        let genItems = [];
        nav && nav.forEach(
            item => genItems.push({
                key: item.key,
                text: item.name,
                onClick: () => setter(item.key)
            }));
        setNavItems(genItems);
    }, [nav, activeNav, setter])

    return (
        <CommandBar items={navItems} farItems={farItems}/>
    )
}