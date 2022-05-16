import Post from "/models/Post"
import { withDB } from "/lib/db"

const publicPostHandler = (req, res) => {
    const publicPosts = await Post.find({ postSetting: "public" }).lean()
    res.status(200).json(publicPosts)
}

export default withDB(publicPostHandler)