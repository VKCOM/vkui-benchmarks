import {Avatar, CardGrid, ContentCard, PanelHeader, PanelHeaderContent, SplitCol} from "@vkontakte/vkui";
import {UserContext} from "../index";
import {Icon16Dropdown} from "@vkontakte/icons";

export const FeaturedFeed = ({setActiveModal}) => {
    return <SplitCol spaced width="320px" maxWidth="320px">
        <PanelHeader>
            <UserContext.Consumer>
                {value =>
                    <PanelHeaderContent
                        onClick={() => {
                            setActiveModal('edit');
                        }}
                        aside={<Icon16Dropdown/>}
                        before={<Avatar alt="user avatar" src={value.photo_100} size={36}/>}
                        status={value && `${value.city.title}, ${value.country.title}`}>
                        {value && `${value.first_name} ${value.last_name}`}
                    </PanelHeaderContent>
                }
            </UserContext.Consumer>
        </PanelHeader>
        <CardGrid size="l">
            <ContentCard
                disabled
                subtitle="VK"
                header="We connect people, services and companies"
                caption="VK is the largest social network in Russia and the CIS. Our mission is to connect
                                people, services and companies by creating simple and convenient communication tools."
            />
            <ContentCard
                disabled
                subtitle="Sferum"
                header="Educational platform"
                caption="Your school in digital world. Learn and communicate while staying home!"
            />
        </CardGrid>
    </SplitCol>
}