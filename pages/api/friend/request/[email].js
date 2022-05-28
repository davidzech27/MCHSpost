import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const friendRequestHandler = async (req, res) => {
    const { email: selfEmail } = await getToken({ req })
    const { email: requestEmail } = req.query

    if (selfEmail === requestEmail) {
        res.status(400).send("You can't be friends with yourself!")
    } else {
        await User.updateOne({ email: requestEmail }, { $addToSet: { "data.friendReqs": selfEmail } })  

        res.status(200).end()
    }
}

export default withDB(friendRequestHandler)