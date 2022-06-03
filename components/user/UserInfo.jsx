import Link from "next/link"
import Avatar from "/components/user/Avatar"

const UserInfo = ({ user }) => {
    return (
        <Link href={`/user/${user.email}`} passHref>
            <div className="w-fit flex items-center cursor-pointer">
                <Avatar user={user} className="h-13 w-13 mr-4" />
                <div className="flex flex-col">
                    <span className="hover:underline">{user.name}</span>
                    <span className="text-subtext">{user.email}</span>
                </div>
            </div>
        </Link>
        
    )
}
 
export default UserInfo