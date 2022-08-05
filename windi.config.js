import { defineConfig } from "windicss/helpers"

//consider adding custom breakpoints. should be one at around 800px
export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#051020",
                surface: "#101C2C",
                hover: "#374155",
                text: "#FEFEFF",
                subtext: "#858AA0",
                green: "#7EA754",
                yellow: "#FFD344"
            },
            fontFamily: {
                "sans": "News Cycle"
            },
            spacing: {
                2.5: "0.625rem"
            }
        }
    },
    shortcuts: {
        "card": "bg-surface rounded-3xl w-full h-min p-6",
        "on-card": "bg-hover bg-opacity-20 rounded-3xl w-full h-min p-6",//bg-opacity 20 or 25
        "button": "tracking-wide text-3xl rounded-2xl w-full h-20",
        "transitions": "transition-all duration-100",
        "column": "flex flex-col content-start gap-2.5",
        "text-field": "w-full h-12 px-4 rounded-xl text-xl outline-none bg-surface bg-opacity-0 placeholder-text placeholder-opacity-45 focus:(bg-opacity-100 placeholder-opacity-75) transitions"
    },
    plugins: [
        
    ]
})