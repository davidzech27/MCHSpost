import { useQuery } from "react-query"

const usePost = (email) => {
    const { data: user, isFetched: userLoaded } = useQuery(`/user/${email}`)
    
    return [user, userLoaded]
}

export default usePost