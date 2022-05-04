import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import useClientRouteParam from "/hooks/utils/useClientRouteParam"

const IndividualPost = () => {
    const postId = useClientRouteParam()

	return (
		<>
            <div>post id: {postId}</div>
		</>
	)
}

export default IndividualPost
