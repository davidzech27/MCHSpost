import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

const authMiddleware = async (req) => {
    if (!await getToken({ req })) {
        const url = req.nextUrl.clone()
        url.pathname = "/signin"
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export default authMiddleware