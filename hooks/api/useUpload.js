import { useMutation, useQueryClient } from "react-query"
import api from "/lib/api"

const useUpload = () => {
    const queryClient = useQueryClient()

    const { mutate: uploadPost } = useMutation(async (newPost) => {
        return (await api.post("/post/upload", newPost)).data
    }, {
        onSuccess: (newPost) => {
            if (newPost.postSetting === "public") {
                queryClient.setQueryData("/feed/public", (publicFeed) => publicFeed ? [newPost, ...publicFeed] : [newPost, ...queryClient.getQueryData("/feed/public")])
            }
        }
    })

    return uploadPost
}

export default useUpload