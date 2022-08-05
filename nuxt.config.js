import { defineNuxtConfig } from "nuxt3"


export default defineNuxtConfig({
    serverMiddleware: [
        { path: "/api", handler: "~/api" }
    ],
    env: {
        MONGO_URL: process.env.MONGO_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        CALLBACK_URL: process.env.CALLBACK_URL
    },
    buildModules: [
        "@pinia/nuxt",
        "nuxt-windicss"
    ]
})