import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "react-query"
import api from "/lib/api"

const useProfile = () => {
    const queryClient = useQueryClient()

    const [unauthenticated, setUnauthenticated] = useState(false)

    const { data: profile } = useQuery("/profile", {
        onSuccess: (profile) => {
            if (!profile) {
                setUnauthenticated(true)
            }
        }
    })

    useQuery("/profile/posts", {
        onSuccess: (profilePosts) => {
            if (profilePosts) {
                queryClient.setQueryData("/profile", (profile) => ({ ...profile, posts: profilePosts }))
            }
        }
    })

    const { mutate: updateProfile } = useMutation(async (newProfile) => {
        return (await api.post("/profile/update", newProfile)).data
    }, {
        onSuccess: (updatedProfile) => {
            queryClient.setQueryData("/profile", updatedProfile)
        }
    })

    return { profile, updateProfile, unauthenticated }
}

export default useProfile