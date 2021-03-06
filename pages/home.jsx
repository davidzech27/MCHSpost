import useStickyState from "/hooks/util/useStickyState"
import useFeed from "/hooks/api/useFeed"
import useProfile from "/hooks/api/useProfile"

import FeedHeader from "/components/header/FeedHeader"
import Column from "/components/wrapper/Column"
import Card from "/components/wrapper/Card"
import PostList from "/components/post/PostList"

const Home = () => {
    const { profile } = useProfile()

    const [feedType, setFeedType] = useStickyState("feedType", "public")
    const feed = useFeed(feedType)

	return (
		<Column>
            {profile && <FeedHeader profile={profile} feedType={feedType} setFeedType={setFeedType} />}

            <PostList posts={feed} />
		</Column>
	)
}

export default Home
