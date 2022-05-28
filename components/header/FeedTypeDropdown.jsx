import { useState } from "react"
import SmallButton from "/components/input/SmallButton"

const FeedTypeDropdown = ({ feedType, setFeedType }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="h-10 w-36 relative">
            <div onMouseLeave={() => setOpen(false)} className="h-[156px] absolute rounded-lg">
                <button onMouseEnter={() => {setOpen(true)}} className={`h-10 w-36 hover:bg-hover rounded-lg transition duration-100 cursor-default ${open ? "bg-surface3" : "bg-surface2"}`}>
                    {feedType === "public" ? "Public feed" : "Friend feed"}<svg className="h-[22px] w-[22px] inline relative left-1 top-[-1px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>

                {open && <div className="h-28 w-36 p-4 absolute bottom-0 bg-surface1 hover:bg-surface2 rounded-lg shadow-lg shadow-background flex flex-col justify-around transition duration-100">
                    <SmallButton onClick={() => setFeedType("public")} className="bg-surface3 hover:bg-hover">
                        Public
                    </SmallButton>
                    <SmallButton onClick={() => setFeedType("friends")} className="bg-surface3 hover:bg-hover">
                        Friends
                    </SmallButton>
                </div>}
            </div>
        </div>
    )
}
 
export default FeedTypeDropdown