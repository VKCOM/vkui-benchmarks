import {Grid, Flex, repeat, Image, Text, View} from "@adobe/react-spectrum";

export const FeedPost = ({avatar, children, time, authorName}) => {
    return (
        <View backgroundColor="gray-200" padding="size-100" borderRadius="regular">
            <Grid
                rows={repeat(2, 'auto')}
                gap="size-100"
            >
                <Flex gap="size-100">
                    <Image width="size-500" height="size-500" alt="post avatar" src={avatar} UNSAFE_style={{borderRadius: '50%'}}/>
                    <Flex direction="column">
                        <Text>{authorName}</Text>
                        <Text color="secondary">{time}</Text>
                    </Flex>
                </Flex>
                <div>
                    {children}
                </div>
            </Grid>
        </View>
    );
}