import '@vkontakte/vkui/dist/vkui.css';
import './index.css';
import {useState} from "react";
import {
    Epic,
    ModalRoot,
    PanelHeader,
    PopoutWrapper,
    Root,
    ScreenSpinner,
    SplitCol,
    SplitLayout,
    usePlatform,
    View,
    ViewWidth,
    VKCOM,
    withAdaptivity,
} from "@vkontakte/vkui";
import SideCol from "./components/SideCol";
import {Icon28HelpOutline, Icon28HomeOutline, Icon28SettingsOutline} from "@vkontakte/icons";
import {Home} from "./panels/Home";
import {Settings} from "./panels/Settings";
import {Support} from "./panels/Support";
import {FeaturedFeed} from "./components/FeaturedFeed";
import {EditProfileModal} from "./modals/EditProfileModal";

export const AppDefault = withAdaptivity((props) => {
    const {viewWidth} = props;
    const [activeStory, setActiveStory] = useState('home');
    const [activeModal, setActiveModal] = useState(null);
    const [popout, setPopout] = useState(null);
    const platform = usePlatform();
    const SecondaryComponent =
        <SideCol {...props} activeTab={activeStory} setActiveTab={(id) => {
            setActiveStory(id)
        }} tabs={[
            {id: "home", icon: <Icon28HomeOutline/>, label: "Home"},
            {id: "settings", icon: <Icon28SettingsOutline/>, label: "Settings"},
            {id: "support", icon: <Icon28HelpOutline/>, label: "Support"},
        ]}/>;

    const imitateLongAction = (cb) => {
        setPopout(
            <PopoutWrapper>
                <ScreenSpinner/>
            </PopoutWrapper>
        )
        setTimeout(() => {
            setPopout(false);
            cb && cb();
        }, 1000);
    }

    const modals =
        <ModalRoot activeModal={activeModal} onClose={_ => {
            setActiveModal(null)
        }}>
            <EditProfileModal id="edit" imitateLongAction={imitateLongAction}/>
        </ModalRoot>

    const isTablet = viewWidth >= ViewWidth.SMALL_TABLET;
    const isDesktop = viewWidth >= ViewWidth.TABLET;
    const MainComponent = isDesktop ? Root : Epic;

    return (
        <SplitLayout
            popout={popout}
            style={{justifyContent: "center"}}
            header={platform !== VKCOM && <PanelHeader separator={false}/>}
            modal={modals}
        >
            {isDesktop && <SplitCol spaced fixed width="280px" maxWidth="280px">
                {SecondaryComponent}
            </SplitCol>}
            <SplitCol spaced maxWidth="560px" animate={!isTablet}>
                <MainComponent tabbar={SecondaryComponent} activeView={activeStory} activeStory={activeStory}>
                    <View id="home" activePanel="home">
                        <Home id="home" imitateLongAction={imitateLongAction}/>
                    </View>
                    <View id="settings" activePanel="settings">
                        <Settings id="settings" imitateLongAction={imitateLongAction}
                                  editProfile={_ => setActiveModal('edit')}/>
                    </View>
                    <View id="support" activePanel="support">
                        <Support id="support"/>
                    </View>
                </MainComponent>
            </SplitCol>
            {isTablet && <FeaturedFeed setActiveModal={setActiveModal}/>}
        </SplitLayout>

    )
}, {viewWidth: true});
