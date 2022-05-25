import { signIn } from "next-auth/react"

const SignInPage = () => {
	return (
		<div className="h-screen w-screen bg-background flex justify-center items-center">
			<button onClick={() => signIn("google", { callbackUrl: "/home" })} className="h-60 w-[60rem] bg-gradient-to-tr from-green to-yellow hover:opacity-85 rounded-full text-6xl tracking-wider transition duration-100">
                Sign in with your
                <br />
                @srcschools.org email acount
			</button>
		</div>
	)
}

SignInPage.noLayout = true

export default SignInPage
