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
    }, [stickyState])//the second useeffect sets localstorage item to the defaultValue, and then sets it to the original localstorage value after the first useeffect's setState has occurred

    return [stickyState, setStickyState]
}

export default useStickyState