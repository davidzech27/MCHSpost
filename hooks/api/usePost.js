import { useQuery, useQueryClient } from "react-query"
import useStickyState from "/hooks/util/useStickyState"

const usePost = (postId) => {
    const queryClient = useQueryClient()

    const [feedType, _] = useStickyState("feedType", "public")

    const { data: post } = useQuery(`/post/${postId}`, {
        initialData: () => {
            return queryClient.getQueryData(`/feed/${feedType}`)?.find((post) => post._id === postId)
        }
    })
    
    return post
}

export default usePost