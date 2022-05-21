module.exports = {
    content: [
        "./pages/**/*.jsx",
        "./components/**/*.jsx"
    ],
    theme: {
        colors: {
            background: "#051020",
            surface1: "#101C2C",
            surface2: "#192435",
            surface3: "#242F41",
            hover: "#374155",
            text: "#FEFEFF",
            subtext: "#858AA0",
            green: "#7EA754",
            yellow: "#FFD344"
        },
        fontFamily: {
            sans: ["News Cycle", "sans-serif"]
        },
        extend: {
            spacing: {
                13: "52px"
            },
            opacity: {
                85: "0.85"
            }
        }
    },
    plugins: []
}