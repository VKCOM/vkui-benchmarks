import {
    CellButton,
    FormItem,
    Group,
    InfoRow,
    ModalPage,
    ModalPageHeader,
    ModalRoot,
    Panel,
    PanelHeader,
    Radio,
    Select,
    SimpleCell,
    SplitCol,
    SplitLayout,
    usePlatform,
    View,
    ViewWidth,
    VKCOM
} from "@vkontakte/vkui";
import {useState} from "react";
import {SideButtons} from "./components/SideButtons";

export const AppModals = (props) => {
    const platform = usePlatform();
    const [activeModal, setActiveModal] = useState('filters')
    const {viewWidth} = props;

    const modals = <ModalRoot activeModal={activeModal} onClose={() => {
        setActiveModal(null)
    }}>
        <ModalPage
            id='filters'
            header={<ModalPageHeader>Filters</ModalPageHeader>}
            onClose={() => {
                setActiveModal(null);
            }}
        >
            <Group>
                <CellButton onClick={() => {
                    setActiveModal(null);
                    setActiveModal('countries')
                }}>
                    Select country
                </CellButton>
                <CellButton onClick={() => {
                    setActiveModal(null);
                    setActiveModal('userInfo')
                }}>
                    User info
                </CellButton>
                <FormItem top="City">
                    <Select
                        defaultValue='kirov'
                        options={[
                            {label: 'Saint-Petersburg', value: 'saint-petersburg'},
                            {label: 'Kirov', value: 'kirov'},
                            {label: 'Moscow', value: 'moscow'},
                        ]}
                    />
                </FormItem>
                <FormItem top="Gender">
                    <Radio name="sex" value={0} defaultChecked>Other</Radio>
                    <Radio name="sex" value={1}>Male</Radio>
                    <Radio name="sex" value={2}>Female</Radio>
                </FormItem>
            </Group>
        </ModalPage>
        <ModalPage id='countries' header={<ModalPageHeader>Select your country</ModalPageHeader>} onClose={() => {
            setActiveModal('filters')
        }}>
            <Group>
                <CellButton onClick={() => {
                    setActiveModal(null);
                    setActiveModal('userInfo')
                }}>
                    User Info
                </CellButton>
                <FormItem top="Countries">
                    {['Russia', 'Ukraine', 'Belarus', 'Kazakhstan', 'Azerbaijan', 'Armenia', 'Georgia', 'Izrael', 'United States'].map(
                        (item, key) => (
                            <Radio name="country" value={key}>
                                {item}
                            </Radio>
                        ))
                    }
                </FormItem>
            </Group>
        </ModalPage>
        <ModalPage id='userInfo' header={<ModalPageHeader>User info</ModalPageHeader>} onClose={() => {
            setActiveModal('filters')
        }}>
            <Group>
                <SimpleCell>
                    <InfoRow header="Birth date">
                        30th January 1993
                    </InfoRow>
                </SimpleCell>
                <SimpleCell>
                    <InfoRow header="Hometown">
                        Erevan
                    </InfoRow>
                </SimpleCell>
                <SimpleCell>
                    <InfoRow header="Place of work">
                        VK Team
                    </InfoRow>
                </SimpleCell>
            </Group>
        </ModalPage>
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