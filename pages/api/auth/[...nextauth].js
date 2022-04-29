import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import User from "/models/User"
import useDB from "/lib/db"

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		})
	],
	callbacks: {
        signIn: useDB(async ({ profile }) => {
			const newUser = {
				email: profile.email.slice(0, -15),
				name: profile.name.slice(0, -8),
				photo: profile.image
			}

			if (!profile.email.endsWith("@srcschools.org")) {
				return "/signin" //"You must register with an @srcschools.org email address!"
            }
			try {
				let user = await User.findOne({
					email:  profile.email.slice(0, -15)
				})

                if (user) {
					return true //"Login successful!"
				} else {
					user = await User.create(newUser)
                    return true //"Account created successfully!"
				}
            } catch (err) {
				return "/signin"
			}
        }),
        session: useDB(async ({ session }) => {
            const email = session.user.email.slice(0, -15)
            const user = await User.findOne({ email: email })
            const newSession = { ...user, expires: session.expires }
            return newSession
        })
	}
})
