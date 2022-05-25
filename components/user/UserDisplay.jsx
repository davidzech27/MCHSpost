import Column from "/components/wrapper/Column"
import Avatar from "/components/user/Avatar"

const UserDisplay = ({ user, button }) => {
    return (
        <Column className="mx-10 my-2">
            <Avatar user={user} className="h-32 w-32 mb-6 self-center" />
        
            <div className="text-center text-xl tracking-wider">{user.name}</div>
            <div className="text-center text-xl text-subtext">{user.email}</div>
            
            <pre className="min-h-[48px] my-6 font-sans text-lg">{user.bio}</pre>
            
            <div className="flex justify-between">
                {button ?? <div />}
                <span className="text-subtext text-lg">Joined on {new Date(user.joinedOn).toDateString()}</span>
            </div>
        </Column>
    )
}
 
export default UserDisplay