import useClientRouteParam from "/hooks/util/useClientRouteParam"
import usePost from "/hooks/api/usePost"

import Card from "/components/wrapper/Card"
import PostCard from "/components/post/PostCard"

const PostPage = () => {
    const postId = useClientRouteParam()

    const post = usePost(postId)

	return (
		<>
            {post ?
            <PostCard post={post} className="bg-surface1" /> :
            "Loading..."
            }
        </>
	)
}

export default PostPage
