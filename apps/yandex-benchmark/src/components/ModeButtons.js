import {HeaderNavItem} from "@yandex/ui/Header";

export const ModeButtons = () => {
    return (
        <>
            <HeaderNavItem onClick={() => {
                window.open('/?mode=default', '_self')
            }}>
                Default
            </HeaderNavItem>
            <HeaderNavItem onClick={() => {
                window.open('/?mode=burn', '_self')
            }}>
                Burn
            </HeaderNavItem>
            <HeaderNavItem onClick={() => {
                window.open('/?mode=modals', '_self')
            }}>
                Modals
            </HeaderNavItem>
        </>
    );
}