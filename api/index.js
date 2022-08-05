import express from "express"
import cookieSession from "cookie-session"
import passport from "passport"
import helmet from "helmet"

import connectToDB from "./config/db"
import setupPassport from "./config/passport"

import api from "./api"
import auth from "./auth"

connectToDB()
setupPassport(passport)

const app = express()

app.use(express.json())
app.use(helmet())

app.use(cookieSession({
    name: "session",
    secret: "asdf"
}))

app.use(passport.initialize())
app.use(passport.session())

app.use("/", api)
app.use("/auth", auth)

export default app