import { useQuery, useQueryClient } from "react-query"

const useUser = (email) => {
    const queryClient = useQueryClient()

    const { data: user } = useQuery(`/user/${email}`, {
        enabled: Boolean(email)
    })

    useQuery(`/user/${email}/posts`, {
        enabled: Boolean(email),
        onSuccess: (userPosts) => {
            queryClient.setQueryData(`/user/${email}`, (user) => ({ ...user, posts: userPosts }))
        }
    })
    
    return user
}

export default useUser