import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const friendRequestHandler = async (req, res) => {
    const { email } = await getToken({ req })

    const { userEmail } = req.query
    await User.updateOne({ email: userEmail }, { $push: { friends: { email } } })

    res.status(200).end()
}

export default withDB(friendRequestHandler)