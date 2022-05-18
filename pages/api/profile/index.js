import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const profileHandler = async (req, res) => {
    const email = (await getToken({ req }))?.email

    if (email) {
        const profile = await User.findOne({ email }).lean()
        res.status(200).json(profile)
    } else {
        res.status(401).end()
    }
}
    
export default withDB(profileHandler)
