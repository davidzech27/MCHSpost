import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const profileHandler = async (req, res) => {
    const { email } = await getToken({ req })

    const profile = await User.findOne({ email }).lean()
    res.status(200).json(profile)
}
    
export default withDB(profileHandler)
