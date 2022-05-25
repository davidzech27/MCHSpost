import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import { withDB } from "/lib/db"

const uploadHandler = async (req, res) => {
    if (req.method === "POST") {
        const { email } = await getToken({ req })
        const user = await User.findOne({ email }).select({ name: 1, photo: 1 }).lean()

        let newPost = {
            text: req.body.text,
            postedBy: {
                email,
                name: user.name,
                photo: user.photo
            },
            postSetting: req.body.postSetting
        }

        newPost = await Post.create(newPost)

        await User.updateOne({ email }, { $addToSet: { posts: newPost._id } })

        res.status(200).json(newPost)
    } else {
        res.status(405).end()
    }
}

export default withDB(uploadHandler)