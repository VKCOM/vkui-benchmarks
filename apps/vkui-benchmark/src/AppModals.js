import {
    CellButton,
    Group,
    ModalRoot,
    Panel,
    PanelHeader,
    SplitCol,
    SplitLayout,
    usePlatform,
    View,
    ViewWidth,
    VKCOM
} from "@vkontakte/vkui";
import {useState} from "react";
import {SideButtons} from "./components/SideButtons";
import {UserInfoModal} from "./modals/UserInfoModal";
import {CountriesModal} from "./modals/CountriesModal";
import {FiltersModal} from "./modals/FiltersModal";

export const AppModals = (props) => {
    const platform = usePlatform();
    const [activeModal, setActiveModal] = useState('filters')
    const {viewWidth} = props;

    const modals = <ModalRoot activeModal={activeModal} onClose={() => {
        setActiveModal(null)
    }}>
        <FiltersModal id="filters" setActiveModal={setActiveModal}/>
        <CountriesModal id="countries" setActiveModal={setActiveModal}/>
        <UserInfoModal id="userInfo" setActiveModal={setActiveModal}/>
    </ModalRoot>

    return (
        <SplitLayout
            style={{justifyContent: "center"}}
            header={platform !== VKCOM && <PanelHeader separator={false}/>}
            modal={modals}
        >
            <SplitCol maxWidth="720px" animate={viewWidth < ViewWidth.SMALL_TABLET}>
                <View activePanel='panel'>
                    <Panel id='panel'>
                        <PanelHeader right={<SideButtons/>}>
                            Modals Example
                        </PanelHeader>
                        <Group>
                            <CellButton onClick={() => {
                                setActiveModal('filters')
                            }}>
                                Open modal
                            </CellButton>
                        </Group>
                    </Panel>
                </View>
            </SplitCol>
        </SplitLayout>
    )
}