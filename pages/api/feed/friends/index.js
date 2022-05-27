import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const friendFeedHandler = async (req, res) => {
    const { email } = await getToken({ req })

    const friends = await User.find({ email }).select({ friends: 1 }).lean()
    const friendsEmails = friends.map((friend) => friend.email)
    
    if (friendsEmails[0]) {
        const friendsPosts = await Post.find().where("postedBy.email").in([friendsEmails]).sort({ postedOn: -1 }).lean()
        res.status(200).json(friendsPosts)
    } else {
        res.status(404).send("You have no friends!")
    }
}

export default withDB(friendsPostHandler)