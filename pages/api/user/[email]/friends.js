import User from "/models/User"
import { withDB } from "/lib/db"

const userFriendsHandler = async (req, res) => {
    const { email } = req.query
    
    const user = await User.findOne({ email }).select({ friends: 1 }).lean()

    if (user) {
        const friends = await User.find().where("email").in(user.friends).select({ posts: 0, friends: 0, data: 0 }).lean()

        res.status(200).json(friends)
    } else {
        res.status(404).end()
    }
    


}

export default withDB(userFriendsHandler)