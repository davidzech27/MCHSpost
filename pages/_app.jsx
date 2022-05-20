import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import toast, { Toaster } from "react-hot-toast"
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
                toast(err.response)
            },
            retry: false
        },
        mutations: {
            onError: (err) => {
                toast(err.response)
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
                <Toaster />
                <ReactQueryDevtools />
            </QueryClientProvider>
	    )
    } else {
        return (
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <Toaster />
                <ReactQueryDevtools />
            </QueryClientProvider>
        )
    }
}

export default App
