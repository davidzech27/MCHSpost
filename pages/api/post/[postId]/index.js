import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const postHandler = async (req, res) => {
    const { postId } = req.query
    const post = await Post.findById(postId).select({ comments: 0 }).lean()

    if (post) {
        if (post.postSetting !== "private") {
            res.status(200).json(post)
        } else {
            const { email } = await getToken({ req })
            const posterEmail = post.postedBy.email

            const { friends: posterFriends } = await User.findOne({ email: posterEmail }).select({ friends: 1 }).lean()

            if (posterFriends.includes(email) || posterEmail === email) {
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