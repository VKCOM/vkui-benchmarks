import {NewsFeed} from "../components/NewsFeed";

export const HomePage = (props) => {
    const {id} = props;

    return (
        <div id={id}>
            <NewsFeed/>
        </div>
    )
}