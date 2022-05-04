import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const useClientRouteParam = () => {
    const router = useRouter()
    const [pathParam, setPathParam] = useState(null)
    useEffect(() => {
        const param = router.asPath.split("/").at(-1)
        setPathParam(param)
    })

    return pathParam
}

export default useClientRouteParam