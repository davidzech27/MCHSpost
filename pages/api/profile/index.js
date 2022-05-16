import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const profileHandler = async (req, res) => {
    const { email } = await getToken({ req })

    if (req.method === "GET") {
        const profile = await User.findOne({ email }).lean()
        res.status(200).send(profile)
    } else if (req.method === "POST") {
        const newFields = {}
        for (field of ["name", "photo", "bio"]) if (req.body[field]) newFields[field] = req.body[field]
        const newProfile = await User.findOneAndUpdate({ email }, newFields).lean()
        res.status(200).send(newProfile)
    }
}
    
export default withDB(profileHandler)
