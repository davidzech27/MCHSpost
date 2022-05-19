import { useState, useEffect } from "react"
import useStickyState from "/hooks/util/useStickyState"

const Home = () => {
    const [feedType, setFeedType] = useStickyState("feedType", "public")
    
	return (
		<>
            <button onClick={() => setFeedType("public")} disabled={feedType === "public"}>public</button>
            <button onClick={() => setFeedType("friends")} disabled={feedType === "friends"}>friends</button>
		</>
	)
}

export default Home
