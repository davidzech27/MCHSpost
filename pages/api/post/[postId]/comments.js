import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const postCommentsHandler = async (req, res) => {
    const { postId } = req.query
    const post = await Post.findById(postId).select({ "postedBy.email": 1, comments: 1, postSetting: 1 }).lean()

    if (post) {
        const { postedBy: { email: posterEmail }, comments } = post

        if (post.postSetting === "public") {
            res.status(200).json(comments)
        } else {
            const { email } = await getToken({ req })

            const { friends: posterFriends } = await User.findOne({ email: posterEmail }).select({ friends: 1 }).lean()

            if (posterFriends.includes(email) || posterEmail === email) {
                res.status(200).json(comments)
            } else {
                res.status(403).end()
            }
        }
    } else {
        res.status(404).end()
    }
}

export default withDB(postCommentsHandler)