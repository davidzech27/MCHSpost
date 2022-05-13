import { NextResponse } from "next/server"

const postMiddleware = async (req) => {
    const url = req.nextUrl.clone()
    
    if (url.pathname === "/post") {
        url.pathname = "/404"
    } else {
        url.pathname = "/post"
    }
    
    return NextResponse.rewrite(url)
}

export default postMiddleware