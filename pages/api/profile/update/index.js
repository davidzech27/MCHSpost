import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const updateProfileHandler = async (req, res) => {
    if (req.method === "POST") {
        const { email } = await getToken({ req })

        const newFields = {}
        for (field of ["name", "photo", "bio"]) if (req.body[field]) newFields[field] = req.body[field]

        const updatedProfile = await User.findOneAndUpdate({ email }, newFields).lean()
        res.status(200).json(updatedProfile)
    } else {
        res.status(405).end()
    }
    
}

export default withDB(updateProfileHandler)