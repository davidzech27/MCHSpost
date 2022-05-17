module.exports = {
    content: [
        "./pages/**/*.jsx",
        "./components/**/*.jsx"
    ],
    theme: {
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
            sans: ["News Cycle", "sans-serif"]
        },
        extend: {
            spacing: {
                2.5: "0.625rem"
            }
        }
    },
    plugins: []
}