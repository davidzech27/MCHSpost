import { useEffect } from "react"
import { useRouter } from "next/router"
import { useQueryClient } from "react-query"
import useStickyState from "/hooks/util/useStickyState"

const LoadingScreen = () => {
	const router = useRouter()
    const queryClient = useQueryClient()
    const [feedType, _] = useStickyState("feedType", "public")

	useEffect(() => {
        const prefetchQueries = async () => {
            await Promise.all([queryClient.prefetchQuery("/profile"), queryClient.prefetchQuery(`/feed/${feedType}`)])
		    router.push("/home")
        }

        prefetchQueries()
	}, [])

	return (
		<div className="h-screen pt-72 text-center
                        bg-gradient-to-r from-green to-yellow">
            <span className="animate-pulse text-9xl text-text font-black">MCHSpost</span>
        </div>
	)
}

LoadingScreen.noLayout = true

export default LoadingScreen
