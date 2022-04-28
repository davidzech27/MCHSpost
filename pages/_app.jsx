import { QueryClient, QueryClientProvider } from "react-query"


const queryClient = new QueryClient()

const App = ({ Component, pageProps }) => {
	return (
		<QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>	
	)
}

export default App
