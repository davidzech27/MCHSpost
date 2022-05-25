import { useQuery } from "react-query"

const usePost = (postId) => {
    const { data: post } = useQuery(`/post/${postId}`, {
        enabled: Boolean(postId)
    })
    
    return post
}

export default usePost