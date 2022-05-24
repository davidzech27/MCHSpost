import Link from "next/link"
import Card from "/components/wrapper/Card"
import Avatar from "/components/user/Avatar"
import FeedTypeDropdown from "/components/layout/FeedTypeDropdown"

const FeedHeader = ({ profile, feedType, setFeedType }) => {
    return (
        <Card className="bg-surface1 text-xl flex justify-between">{/*consider being able to make post next to profile display, like in twitter*/}
            <Link href="/profile" passHref>
                <div className="w-fit flex items-center cursor-pointer">
                    <Avatar user={profile} className="h-10 w-10" />
                    <span className="ml-6">{profile.name}</span>
                    <span className="ml-3 text-subtext">{profile.email}</span>
                </div>
            </Link>
            <div className="flex items-center">
                <FeedTypeDropdown feedType={feedType} setFeedType={setFeedType} />
            </div>
        </Card>
    )
}
 
export default FeedHeader