import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import AppDefault from './AppDefault';
import {createContext} from "react";
import bridge from "@vkontakte/vk-bridge-mock";

export const UserContext = createContext();
const urlParams = new URLSearchParams(window.location.search);

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
        })
    })
}

/*
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
}*/

if (urlParams.has('mode')) {
    switch (urlParams.get('mode')) {
        case 'burn':
            //renderBurn();
            break;
        case 'modals':
            //renderModals();
            break;
        default:
            renderAdaptive();
    }
} else {
    renderAdaptive();
}