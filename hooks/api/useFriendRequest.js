import { useMutation, useQueryClient } from "react-query"
import api from "/lib/api"

const useFriendRequest = () => {
    const queryClient = useQueryClient()

    const { mutate: sendFriendRequest } = useMutation(async (email) => {
        await api.post(`friend/request/${email}`)
    })

    const { mutate: acceptFriendRequest } = useMutation(async (email) => {
        await api.post(`friend/accept/${email}`)
    }, {
        onSuccess: async () => {
            await queryClient.prefetchQuery("/profile")
        }
    })

    return { sendFriendRequest, acceptFriendRequest }
}

export default useFriendRequest