import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import api from "/lib/api"

import Layout from "/components/layout/Layout"

import "/styles/globals.css"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: async ({ queryKey }) => {
                return (await api.get(queryKey[0])).data
            },
            onError: (err) => {
                console.log(err)
            },
            retry: false
        },
        mutations: {
            onError: (err) => {
                console.log(err.response)
            }
        }
    }
})

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
