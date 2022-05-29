import useClientRouteParam from "/hooks/util/useClientRouteParam"
import useUser from "/hooks/api/useUser"
import useFriendRequest from "/hooks/api/useFriendRequest"

import Column from "/components/wrapper/Column"
import UserDisplay from "/components/user/UserDisplay"
import PostList from "/components/post/PostList"
import SmallButton from "/components/input/SmallButton"

const UserPage = () => {
    const email = useClientRouteParam()

    const user = useUser(email)
    const { sendFriendRequest } = useFriendRequest()

    return (
        <Column>
            <UserDisplay user={user} button={
                <SmallButton onClick={() => sendFriendRequest(email)} className="px-2.5 bg-green hover:bg-opacity-75 text-background">Add friend</SmallButton>
            } />
            
            <PostList posts={user?.posts} />
        </Column>        
    )
}
 
export default UserPage