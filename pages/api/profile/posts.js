import User from "/models/User"
import "/models/Post"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const profilePostsHandler = async (req, res) => {
    const email = (await getToken({ req }))?.email

    if (email) {
        const { posts } = await User.findOne({ email }).populate("posts").select({ posts: 1 }).exec()
    
        posts.sort((post1, post2) => post2.postedOn.getTime() - post1.postedOn.getTime())

        res.status(200).json(posts)
    } else {
        res.status(204).end()
    } 
}

export default withDB(profilePostsHandler)