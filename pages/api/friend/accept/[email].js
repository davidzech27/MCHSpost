import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const acceptFriendRequestHandler = async (req, res) => {
    if (req.method === "POST") {
        const { email: selfEmail } = await getToken({ req })
        const { email: friendEmail } = req.query

        const [self, friend] = await Promise.all([
            User.findOne({ selfEmail }).select({ friends: 1, "data.friendReqs": 1 }),
            User.findOne({ friendEmail }).select({ friends: 1, "data.friendReqs": 1 })
        ])

        if (self.data.friendReqs.includes(friendEmail)) {
            delete self.data.friendReqs[self.data.friendReqs.indexOf(friendEmail)]

            self.friends.push(friendEmail); friend.friends.push(selfEmail)

            await Promise.all([self.save(), friend.save()])

            res.status(200).end()
        } else {
            res.status(400).send("You don't have a friend request from user!")
        }
    } else {
        res.status(405).end()
    }
}

export default withDB(acceptFriendRequestHandler)