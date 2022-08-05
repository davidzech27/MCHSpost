import User from "../models/User"
import GoogleOAuth20 from "passport-google-oauth20"

const GoogleStrategy = GoogleOAuth20.Strategy

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL
        },
        async (_accessToken, _refreshToken, profile, done) => {
            const newUser = {
                email: profile.emails[0].value.slice(0, -15),
                name: profile.displayName.slice(0, -8),
                photo: profile.photos[0].value,
                googleId: profile.id
            }
            
            if (profile.emails[0].value.slice(-15) !== "@srcschools.org") {
                return done(null, false, { message: "You must register with an @srcschools.org email address!" })
            }
            try {
                let user = await User.findOne({ email: profile.emails[0].value.slice(0, -15) })//* potentiall use findAndUpdate to connect new google profile pic with account

                if (user) {
                    return done(null, user, { message: "Login successful!" })
                }
                else {
                    user = await User.create(newUser)
                    return done(null, user, { message: "Account created successfully!" })
                }
            }
            catch (err) {
                return done(err)
            }
        })
    )

    passport.serializeUser((user, done) => {
        return done(null, user.googleId)
    })
      
    passport.deserializeUser((id, done) => {
        User.findOne({ googleId: id }, (err, user) => {
            return done(err, user)
        })
    })
}