import {ToggleButton, View, Flex} from "@adobe/react-spectrum";

export const SidebarView = ({nav, activeNav}) => {
    return (
        <View gridArea="sidebar" backgroundColor="gray-50">
            <Flex margin="size-100" gap="size-100" direction="column">
                {nav.map((item, key) =>
                    <ToggleButton onPress={_=>item.action()} isSelected={activeNav === item.id} key={key+"sidebar"}>
                        {item.label}
                    </ToggleButton>
                )}
            </Flex>
        </View>
    )
}