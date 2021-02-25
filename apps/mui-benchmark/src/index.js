import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppAdaptive} from './AppAdaptive';
import bridge from '@vkontakte/vk-bridge-mock';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {deepPurple, purple} from "@material-ui/core/colors";
import {AppBurn} from "./AppBurn";
import {AppModals} from "./AppModals";

export const UserContext = createContext(false);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[100],
        },
        type: 'dark',
        secondary: {
            main: purple[100],
        },
    },
});

const urlParams = new URLSearchParams(window.location.search);

const renderAdaptive = () => {
    bridge.send('VKWebAppInit').then(_ => {
        bridge.send('VKWebAppGetUserInfo').then(r => {
            ReactDOM.render(
                <React.StrictMode>
                    <MuiThemeProvider theme={theme}>
                        <UserContext.Provider value={r}>
                            <AppAdaptive/>
                        </UserContext.Provider>
                    </MuiThemeProvider>
                </React.StrictMode>,
                document.getElementById('root')
            );
        })
    })
}

const renderBurn = () => {
    ReactDOM.render(
        <React.StrictMode>
            <MuiThemeProvider theme={theme}>
                <AppBurn/>
            </MuiThemeProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

const renderModals = () => {
    ReactDOM.render(
        <React.StrictMode>
            <MuiThemeProvider theme={theme}>
                <AppModals/>
            </MuiThemeProvider>
        </React.StrictMode>,
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