import useClientRouteParam from "/hooks/util/useClientRouteParam"
import usePost from "/hooks/api/usePost"

import Card from "/components/wrapper/Card"
import PostCard from "/components/post/PostCard"

const PostPage = () => {
    const postId = useClientRouteParam()

    const post = usePost(postId)

	return (
		<Card className="bg-surface1">
            {post ?
            <PostCard post={post} className="bg-surface2 hover:bg-surface3" /> :
            "Loading..."
            }
        </Card>
	)
}

export default PostPage
