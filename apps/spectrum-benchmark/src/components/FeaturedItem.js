import {Image, Text, View} from "@adobe/react-spectrum";

export const FeaturedItem = ({title, subtitle, text, img}) => {
    return (
        <View backgroundColor="gray-200" overflow="hidden" borderRadius="regular">
            <Image src={img} alt={title}/>
            <View padding="size-100">
                <Text>
                    {title}
                </Text>
                <br/>
                <Text level={5}>
                    {subtitle}
                </Text>
                <br/>
                <Text>
                    {text}
                </Text>
            </View>
        </View>
    );
}