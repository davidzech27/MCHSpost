import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const profileHandler = async (req, res) => {
    const email = (await getToken({ req }))?.email

    if (email) {
        const profile = await User.findOne({ email }).select({ posts: 0, friends: 0, data: 0 }).lean()
        res.status(200).json(profile)
    } else {
        res.status(204).end()
    }
}
    
export default withDB(profileHandler)
