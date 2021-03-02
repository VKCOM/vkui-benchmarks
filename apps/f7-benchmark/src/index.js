import {createContext, StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppDefault} from './AppDefault';
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
import "framework7/framework7-bundle.css";
import "framework7-icons/css/framework7-icons.css";
import bridge from "@vkontakte/vk-bridge-mock";
import {AppBurn} from "./AppBurn";
import {AppModals} from "./AppModals";

export const UserContext = createContext();
const urlParams = new URLSearchParams(window.location.search);
Framework7.use(Framework7React);

const renderAdaptive = () => {
    bridge.send('VKWebAppInit').then(_ => {
        bridge.send('VKWebAppGetUserInfo').then(r => {
            ReactDOM.render(
                <StrictMode>
                    <UserContext.Provider value={r}>
                        <AppDefault/>
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