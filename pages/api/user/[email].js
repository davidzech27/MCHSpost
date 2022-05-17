import User from "/models/User"
import { withDB } from "/lib/db"

const userHandler = async (req, res) => {
    const { email } = req.query
    const user = await User.findOne({ email }).select({ data: 0 }).lean()

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).send("User does not exist.")
    }
}

export default withDB(userHandler)