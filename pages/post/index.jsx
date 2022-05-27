import { useState, useEffect } from "react"
import useClientRouteParam from "/hooks/util/useClientRouteParam"

const PostPage = () => {
    const postId = useClientRouteParam()

	return (
		<>
            <div>post id: {postId}</div>
		</>
	)
}

export default PostPage
