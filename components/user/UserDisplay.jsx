import Column from "/components/wrapper/Column"
import Avatar from "/components/user/Avatar"

const UserDisplay = ({ user, button }) => {
    return (
        <Column className="mx-10 my-2">
            <Avatar user={user} className="h-32 w-32 self-center" />
        
            <div className="mt-2.5 text-center text-2xl tracking-wider">{user.name}</div>
            <div className="mb-2.5 text-center text-2xl text-subtext">{user.email}</div>
            
            <div className="min-h-[108px]">
                <pre className="px-4 py-3 bg-surface2 rounded-xl font-sans text-xl">{user.bio}</pre>
            </div>
            
            <div className="flex justify-between">
                {button ?? <div />}
                <span className="text-subtext text-lg">Joined on {new Date(user.joinedOn).toDateString()}</span>
            </div>
        </Column>
    )
}
 
export default UserDisplay