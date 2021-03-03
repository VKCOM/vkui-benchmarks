import {ActionButton, Flex, Heading, Image, Item, Menu, MenuTrigger, Text, View} from "@adobe/react-spectrum";
import {UserContext} from "../index";

export const HeaderView = ({children, user}) => {
    return (
        <View gridArea="header" backgroundColor="gray-75">
            <Flex alignItems="center" height="100%" marginX="size-100" justifyContent="space-between">
                <Heading level={4}>
                    Adobe Spectrum - {children}
                </Heading>
                <Flex gap="size-200">
                    {user && <UserContext.Consumer>
                        {value => <Flex alignItems="center" gap="size-100">
                            <View UNSAFE_style={{borderRadius: '50%', overflow: 'hidden'}}>
                                <Image width="size-400" height="size-400" src={value.photo_100} alt={value.first_name}/>
                            </View>
                            <Text>{`${value.first_name} ${value.last_name}`}</Text>
                        </Flex>}
                    </UserContext.Consumer>}
                    <MenuTrigger>
                        <ActionButton>Mode</ActionButton>
                        <Menu onAction={key => window.open("/?mode="+key, "_self")}>
                            <Item key="default">Default</Item>
                            <Item key="burn">Burn</Item>
                            <Item key="modals">Modals</Item>
                        </Menu>
                    </MenuTrigger>
                </Flex>
            </Flex>
        </View>
    )
}