import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const useClientRouteParam = () => {
    const router = useRouter()
    
    const routeParam = typeof window !== "undefined" ? router.asPath.split("/").at(-1) : null

    return routeParam
}

export default useClientRouteParam