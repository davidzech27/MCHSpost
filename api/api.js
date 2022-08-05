import express from "express"
import User from "./models/User"
import Post from "./models/Post"
import { ensureAuth } from "./middleware"

const app = express()


//! pay attention to order of routes



app.get("/profile", ensureAuth, (req, res) => {//TODO add a /posts extension endpoint to every user enpoint
    res.status(200).send(req.user)
})

app.post("/profile/update", ensureAuth, async (req, res) => {    
    const newFields = {
        name: req.body.name || req.user.name,
        photo: req.body.photo || req.user.photo,
        bio: req.body.bio || req.user.bio
    }

    try {
        const newProfile = await User.findByIdAndUpdate(req.user._id, newFields).lean()
        res.status(200).send(newProfile)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

app.get("/user/all", async (req, res) => {
    try {
        const allUsers = await User.find({}).select({ googleId: 0, messages: 0 }).lean()
        res.status(200).send(allUsers)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

app.get("/user/:email", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email }).select({ googleId: 0, messages: 0 }).lean()
        res.status(200).send(user)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

app.post("/post/upload", ensureAuth, async (req, res) => {
    let newPost = {
        text: req.body.text,
        poster: {
            email: req.user.email,
            name: req.user.name,
            photo: req.user.photo
        },
        postSetting: req.body.postSetting
    }

    try {
        newPost = await Post.create(newPost)//! make postid part of user document
        res.status(200).send(newPost)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

//! probably just temporary route for testing. will probably be replace with feed
app.get("/post/all", async (req, res) => {
    try {
        const allPosts = await Post.find({}).sort({ postedOn: -1 }).lean()
        res.status(200).send(allPosts)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

app.get("/post/:postid", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postid).lean()
        res.status(200).send(post)
    }
    catch (err) {
        res.status(500).send(err)
    }
})



//* this endpoint will have to manage popping off old alerts
app.get("/alerts", (req, res) => {
    res.status(200).send(req.session.messages)
    //*add line back in once done testing loading session.messages to screen in frontend: req.session.messages = []
})



export default app