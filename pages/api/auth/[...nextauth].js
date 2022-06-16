import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import User from "/models/User"
import { connectToDB } from "/lib/db"

const authHandler = (req, res) => {
    return NextAuth(req, res, {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET
            })
        ],
        callbacks: {
            async signIn({ profile }) {
                if (!profile.email.endsWith("@srcschools.org")) {
                    return "/signin?error=srcsemail"//"You must register with an @srcschools.org email address!"
                }

                try {
                    await connectToDB()

                    const existingUser = await User.findOne({
                        email: profile.email.slice(0, -15)
                    }).lean()

                    if (existingUser) {
                        return true
                    } else {
                        const newUser = {
                            email: profile.email.slice(0, -15),
                            name: profile.name.slice(0, -8),
                            photo: profile.image
                        }
                        await User.create(newUser)
                        return true
                    }
                } catch (err) {
                    return "/signin?error=database"//"A database error has occurred!"
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