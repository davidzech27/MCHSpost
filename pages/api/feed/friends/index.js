import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const friendFeedHandler = async (req, res) => {
    const { email } = await getToken({ req })

    const { friends } = await User.find({ email }).select({ friends: 1 }).lean()
    
    if (friends.length) {
        let friendsPosts = await Post.find().where("postedBy.email").in([friends]).sort({ postedOn: -1 }).lean()

        friendsPosts = friendsPosts.map(({ comments, ...post }) => ({ ...post, commentCount: comments.length }))

        res.status(200).json(friendsPosts)
    } else {
        res.status(404).send("You have no friends!")
    }
}

export default withDB(friendFeedHandler)