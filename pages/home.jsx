import useStickyState from "/hooks/util/useStickyState"
import useFeed from "/hooks/api/useFeed"
import useProfileContext from "/hooks/context/useProfileContext"

import FeedHeader from "/components/header/FeedHeader"
import Column from "/components/wrapper/Column"
import Card from "/components/wrapper/Card"
import PostCard from "/components/post/PostCard"

const Home = () => {
    const { profile, unauthenticated } = useProfileContext()

    const [feedType, setFeedType] = useStickyState("feedType", "public")
    const [feed, feedLoaded] = useFeed(feedType)

	return (
		<Column>
            {profile && <FeedHeader profile={profile} feedType={feedType} setFeedType={setFeedType} />}

            <Card className="bg-surface1">
                <Column>
                    {feedLoaded ?
                    feed.map((post) => <PostCard post={post} className="bg-surface2 hover:bg-surface3" key={post._id} />) :
                    "Loading..."}
                </Column>
            </Card>
		</Column>
	)
}

export default Home
