import useFriend from "/hooks/api/useFriend"
import useProfile from "/hooks/api/useProfile"

import Column from "/components/wrapper/Column"
import Card from "/components/wrapper/Card"
import LinkCard from "/components/wrapper/LinkCard"
import UserInfo from "/components/user/UserInfo"
import SmallButton from "/components/input/SmallButton"

const ExploreBar = () => {
    const { friendRequests, acceptFriendRequest } = useFriend()

    const { profile } = useProfile()

    return (
        <Column>
            {profile && <LinkCard href="/friends" className="bg-surface1 hover:bg-surface3 flex items-center">
                {friendRequests ?
                (friendRequests.length ?
                <Column className="w-full">
                    {friendRequests.map((friendRequest) =>
                    <div className="flex items-center justify-between" key={friendRequest.email}>
                        <UserInfo user={friendRequest} /><SmallButton onClick={() => acceptFriendRequest(friendRequest.email)} className="px-2.5 mr-2 bg-green hover:bg-opacity-75 text-background">Accept</SmallButton>
                    </div>)}
                </Column> :
                <div className="text-2xl text-subtext text-center italic">You have no friend requests</div>) :
                "Loading..."
                }
            </LinkCard>}
            <Card className="h-96 bg-surface1 text-subtext text-2xl text-center">
                Advertise your club here!
                <br />
                Enquire <a href="https://mail.google.com/mail/u/0/?to=david_z2463@srcschools.org&su=MCHSpost+club+advertising&tf=cm" target="_blank" rel="noreferrer" className="underline">here</a>
            </Card>
        </Column>
    )
}
 
export default ExploreBar