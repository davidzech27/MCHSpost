import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const friendRequestHandler = async (req, res) => {
    if (req.method === "POST") {
        const { email: selfEmail } = await getToken({ req })
        const { email: requestedEmail } = req.query

        if (selfEmail !== requestedEmail) {
            const [self, requested] = await Promise.all([
                User.findOne({ selfEmail }).select({ "data.friendReqs": 1, friends: 1 }).lean(),
                User.findOne({ requestedEmail }).select({ "data.friendReqs": 1 })
            ])

            if (!self.data.friendReqs.includes(requestedEmail) && !self.friends.includes(requestedEmail)) {
                requested.data.friendReqs.push(selfEmail)

                await requested.save()

                res.status(200).end()
            } else {
                res.status(400).send("Error sending friend request")
            }
        } else {
            res.status(400).send("You can't be friends with yourself!")
        }
    } else {
        res.status(405).end()
    }
}

export default withDB(friendRequestHandler)