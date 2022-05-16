import User from "/models/User"
import { withDB } from "/lib/db"

const allUserHandler = async (req, res) => {
    const allUsers = await User.find({}).select({ data: 0 }).lean() //consider unselecting user posts
    res.status(200).send(allUsers)
}

export default withDB(allUserHandler)