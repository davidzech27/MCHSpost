import User from "/models/User"
import "/models/Post"
import { withDB } from "/lib/db"

const userPostHandler = async (req, res) => {
    const { email } = req.query
    const { posts } = await User.findOne({ email }).populate("posts").select({ posts: 1 }).exec()

    res.status(200).json(posts)
}

export default withDB(userPostHandler)