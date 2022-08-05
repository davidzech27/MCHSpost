import express from "express"
import passport from "passport"

const app = express()



app.get("/", passport.authenticate("google", { scope: ["profile", "email"] }))


app.get("/auth/callback/google", passport.authenticate("google", {
    successRedirect: "/", successMessage: true, failureRedirect: "/", failureMessage: true
}))




export default app