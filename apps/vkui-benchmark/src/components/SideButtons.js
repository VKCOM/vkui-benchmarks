import {PanelHeaderButton} from "@vkontakte/vkui";

export const SideButtons = () => {
    return (
        <div style={{display: 'flex', gap: 8}}>
            <PanelHeaderButton onClick={() => {
                window.open('/?mode=default', '_self')
            }}>
                Default
            </PanelHeaderButton>
            <PanelHeaderButton onClick={() => {
                window.open('/?mode=burn', '_self')
            }}>
                Burn
            </PanelHeaderButton>
            <PanelHeaderButton onClick={() => {
                window.open('/?mode=modals', '_self')
            }}>
                Modals
            </PanelHeaderButton>
        </div>
    )
}