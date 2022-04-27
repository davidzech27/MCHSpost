import { useEffect } from "react"
import { useRouter } from "next/router"

export default function LoadingScreen() {
    const router = useRouter()

    useEffect(() => {
        router.push("/home")
    }, [])

    return (
        <>
             <div>MCHSpost</div>
        </>
    )
}
