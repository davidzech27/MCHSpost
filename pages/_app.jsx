import Head from "next/head"

import { QueryClient, QueryClientProvider } from "react-query"
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
                toast(err.response.data)
            },
            retry: false,
            refetchOnWindowFocus: false
        },
        mutations: {
            onError: (err) => {
                toast(err.response.data)
            }
        }
    }
})

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <title>MCHSpost</title>
            </Head>

            <Toaster toastOptions={{
                style: {
                    background: "#192435",
                    color: "#FEFEFF"
                }
            }} />

            <QueryClientProvider client={queryClient}>
                {!Component.noLayout ?
                <Layout><Component /></Layout> :
                <Component />}
            </QueryClientProvider>
        </>
    )
}

export default App
