import {CellButton, FormItem, Group, ModalPage, ModalPageHeader, Radio, Select} from "@vkontakte/vkui";

export const FiltersModal = ({id, setActiveModal}) => {
    return <ModalPage
        id={id}
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
}