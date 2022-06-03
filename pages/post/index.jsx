import useClientRouteParam from "/hooks/util/useClientRouteParam"
import usePost from "/hooks/api/usePost"

import PostDisplay from "/components/post/PostDisplay"

const PostPage = () => {
    const postId = useClientRouteParam()

    const post = usePost(postId)

	return (
		<>
            <PostDisplay post={post} />
        </>
	)
}

export default PostPage
