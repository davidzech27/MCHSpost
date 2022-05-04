import { useState, useEffect } from "react"

const useStickyState = (key, defaultValue) => {
    const [stickyState, setStickyState] = useState(defaultValue)

    useEffect(() => {
        const localStorageState = window.localStorage.getItem(key)

        if (localStorageState) {
            setStickyState(JSON.parse(localStorageState))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(stickyState))
    }, [stickyState])

    return [stickyState, setStickyState]
}

export default useStickyState