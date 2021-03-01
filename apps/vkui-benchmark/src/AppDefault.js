import '@vkontakte/vkui/dist/vkui.css';
import './index.css';
import {useState} from "react";
import {
    Avatar,
    Button,
    CardGrid,
    ContentCard,
    DatePicker,
    Epic,
    FormItem,
    FormLayout,
    FormLayoutGroup,
    Input,
    ModalPage,
    ModalPageHeader,
    ModalRoot,
    PanelHeader,
    PanelHeaderContent,
    PopoutWrapper,
    Root,
    ScreenSpinner,
    SplitCol,
    SplitLayout,
    Textarea,
    usePlatform,
    View,
    ViewWidth,
    VKCOM,
    withAdaptivity,
} from "@vkontakte/vkui";
import SideCol from "./components/SideCol";
import {Icon16Dropdown, Icon28HelpOutline, Icon28HomeOutline, Icon28SettingsOutline} from "@vkontakte/icons";
import {Home} from "./panels/Home";
import {Settings} from "./panels/Settings";
import {Support} from "./panels/Support";
import {UserContext} from "./index";

export const AppDefault = withAdaptivity((props) => {
    const {viewWidth} = props;
    const [activeStory, setActiveStory] = useState('home');
    const [activeModal, setActiveModal] = useState('edit');
    const platform = usePlatform();
    const SecondaryComponent = <SideCol {...props} activeTab={activeStory} setActiveTab={(id) => {
        setActiveStory(id)
    }} tabs={[
        {id: 'home', icon: <Icon28HomeOutline/>, label: 'Home'},
        {id: 'settings', icon: <Icon28SettingsOutline/>, label: 'Settings'},
        {id: 'support', icon: <Icon28HelpOutline/>, label: 'Support'},
    ]}/>;

    const modals = <ModalRoot activeModal={activeModal} onClose={_ => {
        setActiveModal(null)
    }}>
        <ModalPage id='edit' header={<ModalPageHeader>Edit profile</ModalPageHeader>}>
            <UserContext.Consumer>
                {value => <FormLayout>
                    <FormLayoutGroup mode="horizontal">
                        <FormItem top="First name">
                            <Input placeholder={value.first_name}/>
                        </FormItem>
                        <FormItem top="Last name">
                            <Input placeholder={value.last_name}/>
                        </FormItem>
                    </FormLayoutGroup>
                    <FormItem top="Date of birth">
                        <DatePicker
                            min={{day: 1, month: 1, year: 1970}}
                            max={{day: 1, month: 1, year: 2006}}
                            dayPlaceholder={value.bdate.split('.')[0]}
                            monthPlaceholder={value.bdate.split('.')[1]}
                            yearPlaceholder={value.bdate.split('.')[2]}
                        />
                    </FormItem>
                    <FormItem top="Bio">
                        <Textarea placeholder={"Your bio there..."}/>
                    </FormItem>
                    <FormLayoutGroup mode='horizontal'>
                        <FormItem>
                            <Button onClick={() => {
                                imitateLongAction()
                            }} size='l' stretched>
                                Save
                            </Button>
                        </FormItem>
                        <FormItem>
                            <Button size='l' mode='secondary' stretched>
                                Undo
                            </Button>
                        </FormItem>
                    </FormLayoutGroup>
                </FormLayout>}
            </UserContext.Consumer>
        </ModalPage>
    </ModalRoot>

    const [popout, setPopout] = useState(null);
    const isTablet = viewWidth >= ViewWidth.SMALL_TABLET;
    const isDesktop = viewWidth >= ViewWidth.TABLET;
    const MainComponent = isDesktop ? Root : Epic;

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
            {isTablet && <SplitCol spaced width="320px" maxWidth="320px">
                <PanelHeader>
                    <UserContext.Consumer>
                        {value =>
                            <PanelHeaderContent
                                onClick={() => {
                                    setActiveModal('edit');
                                }}
                                aside={<Icon16Dropdown/>}
                                before={<Avatar src={value.photo_100} size={36}/>}
                                status={value && `${value.city.title}, ${value.country.title}`}>
                                {value && `${value.first_name} ${value.last_name}`}
                            </PanelHeaderContent>
                        }
                    </UserContext.Consumer>
                </PanelHeader>
                <CardGrid size="l">
                    <ContentCard
                        subtitle="VK"
                        header="We connect people, services and companies"
                        caption="VK is the largest social network in Russia and the CIS. Our mission is to connect
                                people, services and companies by creating simple and convenient communication tools."
                        image="https://sun9-40.userapi.com/impg/s2gwpRPjiR3CPhwror6S563MdKwRk8yPocFJmA/YWVaQgf9JkQ.jpg?size=512x512&quality=96&proxy=1&sign=c475fddfe12375444acb518a7dcd224e&type=album"/>
                    <ContentCard
                        subtitle="Sferum"
                        header="Educational platform"
                        caption="Your school in digital world. Learn and communicate while staying home!"
                        image="https://sferum.ru/static/sidebar_promo_card_image_2x.7dfbf52765761f171964194989fe09cc.png"/>
                </CardGrid>
            </SplitCol>}
        </SplitLayout>

    )
}, {viewWidth: true});
