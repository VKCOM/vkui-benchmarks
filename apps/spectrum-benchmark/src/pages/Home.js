import {Grid, Heading, View} from "@adobe/react-spectrum";
import {NewsFeed} from "../components/NewsFeed";
import {FeaturedFeed} from "../components/FeaturedFeed";

export const Home = (props) => {
    const {id} = props;
    return (
        <Grid columns={['5fr', '1fr']} gap="size-100" id={id}>
            <View>
                <Heading level={1}>
                    Home
                </Heading>
                <NewsFeed/>
            </View>
            <View>
                <Heading level={1}>
                    Featured
                </Heading>
                <FeaturedFeed/>
            </View>
        </Grid>
    )
}