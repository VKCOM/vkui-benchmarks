import {CellButton, FormItem, Group, ModalPage, ModalPageHeader, Radio} from "@vkontakte/vkui";

export const CountriesModal = ({id, setActiveModal}) => {
    return <ModalPage id={id} header={<ModalPageHeader>Select your country</ModalPageHeader>} onClose={() => {
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
}