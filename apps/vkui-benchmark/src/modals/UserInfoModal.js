import {Group, InfoRow, ModalPage, ModalPageHeader, SimpleCell} from "@vkontakte/vkui";

export const UserInfoModal = ({id, setActiveModal}) => {
    return (
        <ModalPage id={id} header={<ModalPageHeader>User info</ModalPageHeader>} onClose={() => {
            setActiveModal('filters')
        }}>
            <Group>
                <SimpleCell disabled>
                    <InfoRow header="Birth date">
                        30th January 1993
                    </InfoRow>
                </SimpleCell>
                <SimpleCell disabled>
                    <InfoRow header="Hometown">
                        Erevan
                    </InfoRow>
                </SimpleCell>
                <SimpleCell disabled>
                    <InfoRow header="Place of work">
                        VK Team
                    </InfoRow>
                </SimpleCell>
            </Group>
        </ModalPage>
    )
}