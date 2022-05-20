import { useEffect } from "react"
import { useRouter } from "next/router"

const LoadingScreen = () => {
	const router = useRouter()

	useEffect(() => {
		router.push("/home")
	}, [])

	return (
		<div class="h-screen pt-72 text-center
                    bg-gradient-to-r from-green to-yellow
                    text-9xl text-text font-black">
            <span class="animate-pulse">MCHSpost</span>
        </div>
	)
}

LoadingScreen.noLayout = true

export default LoadingScreen
