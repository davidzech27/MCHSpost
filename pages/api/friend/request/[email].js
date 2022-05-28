import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const friendRequestHandler = async (req, res) => {
    const { email: selfEmail } = await getToken({ req })
    const { email: requestEmail } = req.query

    await User.updateOne({ email: requestEmail }, { $addToSet: { "data.friendReqs": selfEmail } })  

    res.status(200).end()
}

export default withDB(friendRequestHandler)