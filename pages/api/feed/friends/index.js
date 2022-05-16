import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const friendsPostHandler = (req, res) => {
    const { email } = await getToken({ req })

    const friends = await User.find({ email }).select({ friends: 1 }).lean()
    const friendsEmails = friends.map((friend) => friend.email)

    const friendsPosts = await Post.find({ poster: { email: { $in: friendsEmails } } }).lean()

    res.status(200).json(friendsPosts)
}

export default withDB(friendsPostHandler)