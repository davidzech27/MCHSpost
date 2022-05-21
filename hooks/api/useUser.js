import { useQuery } from "react-query"

const usePost = (email) => {
    const { data: user, isFetched: userLoaded } = useQuery(`/user/${email ?? "all"}`)
    
    return [user, userLoaded]
}

export default usePost