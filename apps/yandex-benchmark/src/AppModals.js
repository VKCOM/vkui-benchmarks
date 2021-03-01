import {Header} from "@yandex/ui/Header";
import {ModeButtons} from "./components/ModeButtons";
import {Modal} from "@yandex/ui/Modal/desktop/bundle";
import {useEffect, useState} from "react";
import {FiltersContent} from "./modals/FiltersContent";
import {UserInfoContent} from "./modals/UserInfoContent";
import {Button} from "@yandex/ui/Button/desktop/bundle";
import {CountriesContent} from "./modals/CountriesContent";

export const AppModals = () => {
    const [currentModal, setCurrentModal] = useState(0);

    useEffect(() => {

    }, [currentModal])

    return (
        <main>
            <Header logo="Yandex.UI Modals" actions={<ModeButtons/>}/>
            <Modal
                theme="normal"
                visible={currentModal === 0}
                onClose={_ => setCurrentModal(false)}
                zIndexGroupLevel={20}
            >
                <FiltersContent
                    openUserInfo={() => setCurrentModal(2)}
                    openCountries={() => setCurrentModal(1)}/>
            </Modal>
            <Modal
                theme="normal"
                visible={currentModal === 1}
                onClose={_ => setCurrentModal(0)}
                zIndexGroupLevel={21}
            >
                <CountriesContent onClose={_ => setCurrentModal(0)} openUserInfo={_ => {
                    setCurrentModal(2)
                }}/>
            </Modal>
            <Modal
                theme="normal"
                visible={currentModal === 2}
                onClose={_ => setCurrentModal(0)}
                zIndexGroupLevel={21}
            >
                <UserInfoContent onClose={_ => setCurrentModal(0)}/>
            </Modal>
            <div className="App">
                <Button size="m" view="action" onClick={() => {
                    setCurrentModal(0)
                }}>
                    Open modal
                </Button>
            </div>
        </main>
    )
}