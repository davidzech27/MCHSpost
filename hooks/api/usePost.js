import { useQuery } from "react-query"

const usePost = (postId) => {
    const { data: post } = useQuery(`/post/${postId}`)
    
    return post
}

export default usePost