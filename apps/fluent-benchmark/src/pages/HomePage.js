import {NewsFeed} from "../components/NewsFeed";
import {useState} from "react";
import {Modal} from "@fluentui/react";
import {ModifyPersonModal} from "../components/ModifyPersonModal";

export const HomePage = (props) => {
    const {id} = props;
    const [modalOpened, setModalOpened] = useState(true);

    return (
        <div id={id}>
            <Modal isOpen={modalOpened} onDismiss={_ => setModalOpened(false)}>
                <ModifyPersonModal action={_ => setModalOpened(false)}/>
            </Modal>
            <NewsFeed/>
        </div>
    )
}