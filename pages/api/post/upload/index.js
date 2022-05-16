import Post from "/models/Post"
import User from "/models/User"
import { getToken } from "next-auth/jwt"
import withDB from "/lib/db"

const uploadHandler = (req, res) => {
    if (req.method === "POST") {
        const { email } = await getToken({ req })
        const user = await User.findOne({ email }).select({ name: 1, photo: 1 }).lean()

        let newPost = {
            text: req.body.text,
            poster: {
                email,
                name: user.name,
                photo: user.photo
            },
            postSetting: req.body.postSetting
        }

        newPost = await Post.create(newPost)
        res.status(200).send(newPost)
    } else {
        res.status(405).send(`HTTP method "${req.method}" not allowed for this request.`)
    }
}

export default withDB(uploadHandler)