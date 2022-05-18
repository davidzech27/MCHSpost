import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import Layout from "/components/Layout"

import "/styles/globals.css"

const queryClient = new QueryClient()

const App = ({ Component, pageProps }) => {
    if (!Component.noLayout) {
        return (
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <ReactQueryDevtools />
            </QueryClientProvider>
	    )
    } else {
        return (
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        )
    }
}

export default App
