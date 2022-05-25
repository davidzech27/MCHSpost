import { useQuery } from "react-query"

const useFeed = (feedType) => {
    const { data: feed, isFetched: feedLoaded } = useQuery(`/feed/${feedType}`, {
        enabled: Boolean(feedType)
    })
    
    return [feed, feedLoaded]
}

export default useFeed