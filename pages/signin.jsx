import { signIn } from "next-auth/react"

const SignInPage = () => {
	return (
		<>
			<button onClick={() => signIn("google", { callbackUrl: "/home" })}>
                Sign in
			</button>
		</>
	)
}

export default SignInPage
