import { NextResponse } from "next/server"

const userMiddleware = async (req) => {
    const url = req.nextUrl.clone()
    
    if (url.pathname === "/user") {
        url.pathname = "/404"
    } else {
        url.pathname = "/user"
    }
    
    return NextResponse.rewrite(url)
}

export default userMiddleware