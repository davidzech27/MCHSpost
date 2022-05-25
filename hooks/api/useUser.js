import { useQuery } from "react-query"

const usePost = (email) => {
    const { data: user } = useQuery(`/user/${email}`, {
        enabled: Boolean(email)
    })
    
    return user
}

export default usePost