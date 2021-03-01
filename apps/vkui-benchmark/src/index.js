import {createContext, StrictMode} from "react";
import ReactDOM from 'react-dom';
import {AppDefault} from './AppDefault';
import {AdaptivityProvider, AppRoot, ConfigProvider} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge-mock";
import {AppBurn} from "./AppBurn";
import {AppModals} from "./AppModals";

export const UserContext = createContext();
const urlParams = new URLSearchParams(window.location.search);

const renderDefault = () => {
    bridge.send('VKWebAppInit').then(_ => {
        bridge.send('VKWebAppGetUserInfo').then(r => {
            ReactDOM.render(
                <StrictMode>
                    <ConfigProvider webviewType='internal'>
                        <AdaptivityProvider>
                            <AppRoot>
                                <UserContext.Provider value={r}>
                                    <AppDefault/>
                                </UserContext.Provider>
                            </AppRoot>
                        </AdaptivityProvider>
                    </ConfigProvider>
                </StrictMode>,
                document.getElementById('root')
            );
        })
    })
}

const renderBurn = () => {
    ReactDOM.render(
        <StrictMode>
            <ConfigProvider webviewType='internal'>
                <AdaptivityProvider>
                    <AppRoot>
                        <AppBurn/>
                    </AppRoot>
                </AdaptivityProvider>
            </ConfigProvider>
        </StrictMode>,
        document.getElementById('root')
    );
}

const renderModals = () => {
    ReactDOM.render(
        <StrictMode>
            <ConfigProvider webviewType='internal'>
                <AdaptivityProvider>
                    <AppRoot>
                        <AppModals/>
                    </AppRoot>
                </AdaptivityProvider>
            </ConfigProvider>
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