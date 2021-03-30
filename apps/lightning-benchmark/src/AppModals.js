import {useState} from "react";
import {TestModal} from "./components/TestModal";
import {Navbar} from "./components/Navbar";
import {Button} from "@salesforce/design-system-react";

export const AppModals = () => {
    const [openedModal, setOpenedModal] = useState(1);
    return (
        <div>
            <Navbar/>
            <div className="ModalPage">
                <Button onClick={_=>{setOpenedModal(1)}}>
                    Open modal, please
                </Button>
            </div>
            <TestModal setter={_=>setOpenedModal(2)} opened={openedModal === 1}/>
            <TestModal sv setter={_=>setOpenedModal(3)} opened={openedModal === 2}/>
            <TestModal tv setter={setOpenedModal} opened={openedModal === 3}/>
        </div>
    )
}