import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import withDB from "/lib/db"

const postHandler = (req, res) => {
    const { postId } = req.query
    const post = await Post.findById(postId).lean()

    if (post) {
        if (post.postSetting === "public") {
            res.status(200).json(post)
        } else {
            const { email } = await getToken({ req })

            const posterFriends = await User.findOne({ email: post.poster.email }).select({ friends: 1  }).lean()
            const posterFriendsEmails = posterFriends.map((posterFriend) => posterFriend.email)

            if (posterFriendsEmails.includes(email)) {
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