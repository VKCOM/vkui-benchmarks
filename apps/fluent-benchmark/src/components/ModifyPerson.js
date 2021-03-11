import {DocumentCard, Label, Modal, PrimaryButton} from "@fluentui/react";
import {useState} from "react";
import {ModifyPersonModal} from "./ModifyPersonModal";

export const ModifyPerson = () => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <DocumentCard style={{
            padding: "16px 12px",
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex"
        }}>
            <Label>
                Modify your user account...
            </Label>
            <Modal isOpen={modalOpened} onDismiss={_ => setModalOpened(!modalOpened)}>
                <ModifyPersonModal action={_ => setModalOpened(!modalOpened)}/>
            </Modal>
            <PrimaryButton onClick={_ => setModalOpened(!modalOpened)}>
                Edit
            </PrimaryButton>
        </DocumentCard>
    )
}