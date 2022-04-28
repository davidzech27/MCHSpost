import { useEffect } from "react"
import { useRouter } from "next/router"

const LoadingScreen = () => {
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

export default LoadingScreen
