import ReactDOM from 'react-dom';
import './index.css';
import {AppDefault} from './AppDefault';
import 'antd/dist/antd.css';
import bridge from "@vkontakte/vk-bridge-mock";
import {createContext, StrictMode} from "react";
import {AppBurn} from "./AppBurn";
import {AppModals} from "./AppModals";

const urlParams = new URLSearchParams(window.location.search);
export const UserContext = createContext(false);

const renderDefault = () => {
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
        })
    })
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
            renderDefault();
    }
} else {
    renderDefault();
}