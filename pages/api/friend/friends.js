import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const selfFriendsHandler = async (req, res) => {
    const { email } = await getToken({ req })
    
    let { friends } = await User.findOne({ email }).select({ friends: 1 }).lean()

    if (friends) {
        friends = await User.find().where("email").in(friends).select({ posts: 0, friends: 0, data: 0 }).lean()

        res.status(200).json(friends)
    } else {
        res.status(204).end()
    }
    


}

export default withDB(selfFriendsHandler)