import useFriend from "/hooks/api/useFriend"

import Card from "/components/wrapper/Card"
import Column from "/components/wrapper/Column"
import UserCard from "/components/user/UserCard"
import SmallButton from "/components/input/SmallButton"

const FriendsPage = () => {
    const { friendRequests, friends, acceptFriendRequest } = useFriend()

    return (
        <Column>
            <Card className="bg-surface1">
                <div className="ml-2.5 mb-4 text-subtext text-xl">Friend requests</div>
                {friendRequests ?
                (friendRequests.length ?
                <Column>
                    {friendRequests.map((friendRequest) => <UserCard user={friendRequest} button={
                        <SmallButton onClick={(e) => acceptFriendRequest(friendRequest.email)} className="px-2.5 bg-green hover:bg-opacity-75 text-background">Accept</SmallButton>
                    } className="bg-surface2 hover:bg-surface3" key={friendRequest.email} />)}
                </Column> :
                <div className="ml-2.5 text-lg">You don't have any friend requests.</div>) :
                "Loading..."
                }
            </Card>
            <Card className="bg-surface1">
                <div className="ml-2.5 mb-4 text-subtext text-xl">Friends</div>
                {friends ?
                (friends.length ?
                <Column>
                    {friends.map((friend) => <UserCard user={friend} className="bg-surface2 hover:bg-surface3" key={friend.email} />)}
                </Column> :
                <div className="ml-2.5 text-lg">You don't have any friends yet.</div>) :
                "Loading..."
                }
            </Card>
        </Column>
    )
}

export default FriendsPage