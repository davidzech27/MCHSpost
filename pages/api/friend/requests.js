import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const selfFriendRequestsHandler = async (req, res) => {
    const { email } = await getToken({ req })
    
    let { data: { friendReqs } } = await User.findOne({ email }).select({ "data.friendReqs": 1 }).lean()

    friendReqs = await User.find().where("email").in(friendReqs).select({ posts: 0, friends: 0, data: 0 }).lean()

    res.status(200).json(friendReqs)
}

export default withDB(selfFriendRequestsHandler)