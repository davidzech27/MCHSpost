import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import User from "/models/User"
import { connectToDB } from "/lib/db"
import { getToken } from "next-auth/jwt"

const authHandler = (req, res) => {
    return NextAuth(req, res, {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET
            })
        ],
        callbacks: {
            async signin({ profile }) {
                console.log(profile)
                if (!profile.email.endsWith("@srcschools.org")) {
                    return "/signin" //"You must register with an @srcschools.org email address!"
                }

                try {
                    await connectToDB()

                    const existingUser = await User.findOne({
                        email: profile.email.slice(0, -15)
                    }).lean()

                    if (existingUser) {
                        return true //"Login successful!"
                    } else {
                        const newUser = {
                            email: profile.email.slice(0, -15),
                            name: profile.name.slice(0, -8),
                            photo: profile.image
                        }
                        await User.create(newUser)
                        return true //"Account created successfully!"
                    }
                } catch (err) {
                    return "/signin" //"An error has occurred!"
                }
            },
            jwt({ token }) {
                token.email = token.email.slice(0, -15)
                delete token.name
                return token
            }
        }
    })
}

export default authHandler