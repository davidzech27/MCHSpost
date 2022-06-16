import LinkCard from "/components/wrapper/LinkCard"
import UserInfo from "/components/user/UserInfo"

const UserCard = ({ user, button, className }) => {
    return (
        <LinkCard href={`/user/${user.email}`} className={`flex justify-between ${className}`}>
            <UserInfo user={user} />
            <div className={`h-13 break-words whitespace-pre-wrap overflow-wrap-anywhere overflow-y-scroll ${button ? "w-1/2" : "w-[71%]"}`}>{user.bio}</div>
            {button && <div className="self-center">{button}</div>}
        </LinkCard>
    )
}
 
export default UserCard