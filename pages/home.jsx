import { useState } from "react"
import useStickyState from "/hooks/util/useStickyState"
import useFeed from "/hooks/api/useFeed.js"
import useUpload from "/hooks/api/useUpload"

import Column from "/components/wrapper/Column"
import Button from "/components/input/Button"
import Card from "/components/wrapper/Card"
import PostCard from "/components/post/PostCard"
import TextArea from "/components/input/TextArea"

const Home = () => {
    const [feedType, setFeedType] = useStickyState("feedType", "public")
    const [feed, feedLoaded] = useFeed(feedType)

	return (
		<Column>
            <Card className="bg-surface1">
                <Column>
                    <Button onClick={() => setFeedType("public")} className="bg-surface2 hover:bg-surface3">Public</Button>
                    <Button onClick={() => setFeedType("friends")} className="bg-surface2 hover:bg-surface3">Friends</Button>
                </Column>
            </Card>

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
