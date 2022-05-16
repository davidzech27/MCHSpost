import User from "/models/User"
import { withDB } from "/lib/db"

const userHandler = async (req, res) => {
    const { email } = req.query
    const user = await User.findOne({ email }).select({ data: 0 }).lean()
    res.status(200).send(user)
}

export default withDB(userHandler)