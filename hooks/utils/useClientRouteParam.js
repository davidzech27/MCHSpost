import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const useClientRouteParam = () => {
    const router = useRouter()
    const [routeParam, setRouteParam] = useState(null)
    useEffect(() => {
        const param = router.asPath.split("/").at(-1)
        setRouteParam(param)
    }, [])

    return routeParam
}

export default useClientRouteParam