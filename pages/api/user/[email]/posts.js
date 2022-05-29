import User from "/models/User"
import "/models/Post"
import { withDB } from "/lib/db"

const userPostHandler = async (req, res) => {
    const { email } = req.query

    let { posts } = await User.findOne({ email }).populate("posts").select({ posts: 1 }).exec()
    
    posts = posts.map(({ comments, ...post }) => ({ ...post, commentCount: comments.length }))
    posts.sort((post1, post2) => post2.postedOn.getTime() - post1.postedOn.getTime())

    res.status(200).json(posts)
}

export default withDB(userPostHandler)