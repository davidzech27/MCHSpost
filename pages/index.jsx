import { useEffect } from "react"
import { useRouter } from "next/router"
import { useQueryClient } from "react-query"

const LoadingScreen = () => {
	const router = useRouter()
    const queryClient = useQueryClient()

	useEffect(() => {
        const prefetchQueries = async () => {
            await queryClient.prefetchQuery("/profile")
		    router.push("/home")
        }

        prefetchQueries()
	}, [])

	return (
		<div className="h-screen pt-72 text-center
                    bg-gradient-to-r from-green to-yellow
                    text-9xl text-text font-black">
            <span className="animate-pulse">MCHSpost</span>
        </div>
	)
}

LoadingScreen.noLayout = true

export default LoadingScreen
