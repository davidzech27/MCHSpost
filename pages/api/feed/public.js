import Post from "/models/Post"
import { withDB } from "/lib/db"

const publicFeedHandler = async (req, res) => {
    const publicPosts = await Post.find({ postSetting: "public" }).sort({ postedOn: -1 }).lean()
    res.status(200).json(publicPosts)
}

export default withDB(publicPostHandler)