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

    const { data: posts } = useQuery(`/user/${profile?.email}/posts`, {
        enabled: Boolean(profile)
    })

    const { mutate: updateProfile } = useMutation(async (newProfile) => {
        return (await api.post("/profile/update", newProfile)).data
    }, {
        onSuccess: (updatedProfile) => {
            queryClient.setQueryData("/profile", updatedProfile)
        }
    })

    return { profile, updateProfile, posts, unauthenticated }
}

export default useProfile