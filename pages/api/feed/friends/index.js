import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const friendsPostHandler = async (req, res) => {
    const { email } = await getToken({ req })

    const friends = await User.find({ email }).select({ friends: 1 }).lean()
    const friendsEmails = friends.map((friend) => friend.email)

    const friendsPosts = await Post.find({ poster: { email: { $in: friendsEmails } } }).sort({ postedOn: -1 }).lean()//! $in not working

    res.status(200).json(friendsPosts)
}

export default withDB(friendsPostHandler)