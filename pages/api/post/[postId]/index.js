import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const postHandler = async (req, res) => {
    const { postId } = req.query
    const post = await Post.findById(postId).select({ comments: 0 }).lean()

    if (post) {
        if (post.postSetting === "public") {
            res.status(200).json(post)
        } else {
            const { email } = await getToken({ req })

            const { friends: posterFriends } = await User.findOne({ email: post.postedBy.email }).select({ friends: 1 }).lean()
            const posterFriendsEmails = posterFriends.map((posterFriend) => posterFriend.email)

            if (posterFriendsEmails.includes(email) || post.postedBy.email === email) {
                res.status(200).json(post)
            } else {
                res.status(403).send("Can't view private post. Not friends with user.")
            }
        }
    } else {
        res.status(404).send("Post not found.")
    }
}

export default withDB(postHandler)