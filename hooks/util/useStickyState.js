import { useState, useEffect } from "react"

const useStickyState = (key, defaultValue) => {
    const initialValue = typeof window !== "undefined" && window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : defaultValue

    const [stickyState, setStickyState] = useState(initialValue)

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(stickyState))
    }, [stickyState])

    return [stickyState, setStickyState]
}

export default useStickyState