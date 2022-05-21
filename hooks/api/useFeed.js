import { useQuery } from "react-query"

const useFeed = (feedType) => {
    const { data: feed, isFetched: feedLoaded } = useQuery(`/feed/${feedType}`)
    
    return [feed, feedLoaded]
}

export default useFeed