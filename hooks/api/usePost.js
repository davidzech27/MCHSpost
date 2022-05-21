import { useQuery } from "react-query"

const usePost = (postId) => {
    const { data: post, isFetched: postLoaded } = useQuery(`/post/${postId}`)
    
    return [post, postLoaded]
}

export default usePost