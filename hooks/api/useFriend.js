import { useQuery, useMutation, useQueryClient } from "react-query"
import api from "/lib/api"

const useFriend = () => {
    const queryClient = useQueryClient()

    const { data: friendRequests } = useQuery("/friend/requests")

    const { data: friends } = useQuery(`/user/${queryClient.getQueryData("/profile")?.email}/friends`, {
        enabled: Boolean(queryClient.getQueryData("/profile"))
    })

    const { mutate: sendFriendRequest } = useMutation(async (email) => {
        await api.post(`/friend/request/${email}`)
    })

    const { mutate: acceptFriendRequest } = useMutation(async (email) => {
        await api.post(`/friend/accept/${email}`)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(`/user/${queryClient.getQueryData("/profile").email}/friends`)
            queryClient.invalidateQueries("/friend/requests")
        }
    })

    const { mutate: unfriendUser } = useMutation(async (email) => {
        await api.post(`/friend/unfriend/${email}`)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(`/user/${queryClient.getQueryData("/profile").email}/friends`)
        }
    })

    return { friendRequests, friends, sendFriendRequest, acceptFriendRequest, unfriendUser }
}

export default useFriend