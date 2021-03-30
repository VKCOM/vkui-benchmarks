import {Header} from "./components/Header";
import {DefaultButton, Modal, Stack} from "@fluentui/react";
import {useState} from "react";

export const AppModals = () => {
    const [selectedModal, setSelectedModal] = useState(1);

    return (
        <Stack>
            <Header/>
            <Stack>
                <DefaultButton onClick={_ => setSelectedModal(1)}>
                    Open Modal
                </DefaultButton>
                <Modal title="First modal" isOpen={selectedModal === 1} onDismiss={_ => setSelectedModal(2)}>
                    Wow! It's modal #1.
                </Modal>
                <Modal title="Second modal" isOpen={selectedModal === 2} onDismiss={_ => setSelectedModal(3)}>
                    Wow! It's modal #2.
                </Modal>
                <Modal title="Third modal" isOpen={selectedModal === 3} onDismiss={_ => setSelectedModal(0)}>
                    Wow! It's modal #3.
                </Modal>
            </Stack>
        </Stack>
    )
}