import { useQuery } from "react-query"

const useFeed = (feedType) => {
    const { data: feed } = useQuery(`/feed/${feedType}`, {
        enabled: Boolean(feedType)
    })
    
    return feed
}

export default useFeed