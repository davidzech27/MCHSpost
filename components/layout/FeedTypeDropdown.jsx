import { useState } from "react"
import SmallButton from "/components/input/SmallButton"

const FeedTypeDropdown = ({ feedType, setFeedType }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <button onMouseEnter={() => {setOpen(true)}} className={`h-10 w-32 relative z-10 rounded-lg transition duration-100 cursor-default hover:bg-hover ${open ? "bg-surface3" : "bg-surface2"}`}>
                {feedType === "public" ? "Public feed" : "Friend feed"}
            </button>

            {open && <div onMouseLeave={() => setOpen(false)} className="h-[156px] absolute top-0 rounded-lg flex items-end">
                <div className="h-28 w-32 p-4 bg-surface1 hover:bg-surface2 rounded-lg shadow-lg shadow-background flex flex-col justify-around transition duration-100">
                    <SmallButton onClick={() => setFeedType("public")} className="bg-surface3 hover:bg-hover">
                        Public
                    </SmallButton>
                    <SmallButton onClick={() => setFeedType("friends")} className="bg-surface3 hover:bg-hover">
                        Friends
                    </SmallButton>
                </div>
            </div>}
        </div>
    )
}
 
export default FeedTypeDropdown