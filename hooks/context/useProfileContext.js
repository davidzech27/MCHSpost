import { useContext } from "react"
import { ProfileContext } from "/lib/context"

const useProfileContext = () => useContext(ProfileContext)

export default useProfileContext