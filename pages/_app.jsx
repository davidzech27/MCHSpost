import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import toast, { Toaster } from "react-hot-toast"
import api from "/lib/api"
import { ModalContext } from "/lib/context.js"

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
            retry: false,
            refetchOnWindowFocus: false
        },
        mutations: {
            onError: (err) => {
                toast(err.response)
            }
        }
    }
})

const App = ({ Component }) => {
    const [modal, setModal] = useState(null)

    return (
        <>
            <Toaster toastOptions={{
                className: "bg-background text-text"
            }} />

            <QueryClientProvider client={queryClient}>
                <ModalContext.Provider value={{ setModal }}>
                    {modal}

                    {!Component.noLayout ?
                    <Layout Component={Component} /> :
                    <Component />}
                </ModalContext.Provider>

                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    )
}

export default App
