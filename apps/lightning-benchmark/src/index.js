import {StrictMode, createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {IconSettings} from "@salesforce/design-system-react";
import {AppDefault} from './AppDefault';
import bridge from "@vkontakte/vk-bridge-mock";
import {AppBurn} from "./components/AppBurn";
import {AppModals} from "./AppModals";

export const UserContext = createContext();
const urlParams = new URLSearchParams(window.location.search);

const renderAdaptive = () => {
    bridge.send('VKWebAppInit').then(_ => {
        bridge.send('VKWebAppGetUserInfo').then(r => {
            ReactDOM.render(
                <StrictMode>
                    <UserContext.Provider value={r}>
                        <IconSettings iconPath="/icons">
                            <AppDefault />
                        </IconSettings>
                    </UserContext.Provider>
                </StrictMode>,
                document.getElementById('root')
            );
        });
    });
}

const renderBurn = () => {
    ReactDOM.render(
        <StrictMode>
            <AppBurn/>
        </StrictMode>,
        document.getElementById('root')
    );
}

const renderModals = () => {
    ReactDOM.render(
        <StrictMode>
            <AppModals/>
        </StrictMode>,
        document.getElementById('root')
    );
}

if (urlParams.has('mode')) {
    switch (urlParams.get('mode')) {
        case 'burn':
            renderBurn();
            break;
        case 'modals':
            renderModals();
            break;
        default:
            renderAdaptive();
    }
} else {
    renderAdaptive();
}
