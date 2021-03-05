import {NewsFeed} from "../components/NewsFeed";
import {FeaturedFeed} from "../components/FeaturedFeed";

export const Home = (props) => {
    const {id} = props;

    return (
        <div id={id} className="HomePage">
            <NewsFeed/>
            <FeaturedFeed/>
        </div>
    )
}