import './App.css';
import {configureRootTheme} from '@yandex/ui/Theme'
import {theme} from '@yandex/ui/Theme/presets/default'
import {DefaultHeader} from "./components/DefaultHeader";
import {PageView} from "./components/PageView";
import {useState} from "react";
import {HomePage} from "./pages/HomePage";
import {FeaturedFeed} from "./components/Featured";
import {SettingsPage} from "./pages/SettingsPage";
import {Modal as ModalDesktop, withThemeNormal} from "@yandex/ui/Modal/desktop";
import {compose} from "@bem-react/core";
import {withZIndex} from "@yandex/ui/withZIndex";
import {ProfileEditContent} from "./components/ProfileEditContent";
import {Spin as SpinDesktop, withPositionCenter, withSizeM, withViewDefault} from "@yandex/ui/Spin/desktop";

configureRootTheme({theme});

const AppDefault = () => {
    const [activePage, setActivePage] = useState('home');
    const [showProfileModal, setShowProfileModal] = useState(true);
    const [showSpinner, setShowSpinner] = useState(false);

    const Modal = compose(
        withThemeNormal,
        withZIndex,
    )(ModalDesktop);

    const Spin = compose(
        withSizeM,
        withViewDefault,
        withPositionCenter
    )(SpinDesktop);

    const toggleProfileModal = () => {
        setShowProfileModal(!showProfileModal);
    }

    return (
        <>
            <DefaultHeader value={activePage} onChange={e => setActivePage(e)} nav={[
                {id: 'home', label: 'Home'},
                {id: 'settings', label: 'Settings'},
                {id: 'support', label: 'Support'},
            ]} openProfileModal={() => {
                toggleProfileModal()
            }}/>
            <Modal
                theme="normal"
                onClose={() => toggleProfileModal()}
                visible={showProfileModal}
                zIndexGroupLevel={20}
            >
                <ProfileEditContent
                    onEnter={() => {
                        setShowSpinner(true);
                        setTimeout(() => {
                            toggleProfileModal();
                            setShowSpinner(false);
                        }, 1000)
                    }}
                    onCancel={() => {
                        toggleProfileModal()
                    }}
                />
            </Modal>
            <Spin size="m" view="default" progress={showSpinner} position="center"/>
            <div className="App">
                <main className="App__content">
                    <PageView activePage={activePage}>
                        <HomePage id='home'/>
                        <SettingsPage id='settings' toggleProfileModal={toggleProfileModal}/>
                        <div id='support'>support</div>
                    </PageView>
                </main>
                <aside className="App__aside">
                    <FeaturedFeed/>
                </aside>
            </div>
        </>
    );
}

export default AppDefault;
