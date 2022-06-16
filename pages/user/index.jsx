import { useRef } from "react"

import useClientRouteParam from "/hooks/util/useClientRouteParam"
import useUser from "/hooks/api/useUser"
import useFriend from "/hooks/api/useFriend"

import Column from "/components/wrapper/Column"
import UserDisplay from "/components/user/UserDisplay"
import PostList from "/components/post/PostList"
import SmallButton from "/components/input/SmallButton"

const UserPage = () => {
    const email = useClientRouteParam()

    const user = useUser(email)
    const { friendRequests, friends, sendFriendRequest, acceptFriendRequest, unfriendUser } = useFriend()

    let button = null
    const requestSent = useRef(false)
    if (friends && friends.map((friend) => friend.email).includes(email)) {
        button = <SmallButton onClick={() => unfriendUser(email)} className="px-2.5 bg-yellow hover:bg-opacity-75 text-background">Remove friend</SmallButton>
    } else if (friendRequests && friendRequests.map((friendRequest) => friendRequest.email).includes(email)) {
        button = <SmallButton onClick={() => acceptFriendRequest(email)} className="px-2.5 bg-green hover:bg-opacity-75 text-background">Accept friend request</SmallButton>
    } else if (friends && friendRequests) {
        button = <SmallButton onClick={() => { sendFriendRequest(email); requestSent.current = true }} disabled={requestSent.current} className={`px-2.5 bg-green text-background ${requestSent.current ? "bg-opacity-40" : "hover:bg-opacity-75"}`}>Add friend</SmallButton>
    }

    return (
        <Column>
            <UserDisplay user={user} button={button} />
            
            <PostList posts={user?.posts} />
        </Column>        
    )
}
 
export default UserPage