import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const unfriendHandler = async (req, res) => {
    if (req.method === "POST") {
        const { email: selfEmail } = await getToken({ req })
        const { email: otherEmail } = req.query

        const [self, other] = await Promise.all([
            User.findOne({ selfEmail }).select({ friends: 1 }),
            User.findOne({ otherEmail }).select({ friends: 1 })
        ])

        self.friends = self.friends.filter((friend) => friend !== otherEmail)
        other.friends = other.friends.filter((friend) => friend !== selfEmail)

        await Promise.all([self.save(), other.save()])

        res.status(200).end()
    } else {
        res.status(405).end()
    }
}

export default withDB(unfriendHandler)