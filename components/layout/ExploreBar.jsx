import useFriend from "/hooks/api/useFriend"

import Column from "/components/wrapper/Column"
import Card from "/components/wrapper/Card"
import LinkCard from "/components/wrapper/LinkCard"

const ExploreBar = () => {
    const { friendRequests } = useFriend()

    return (
        <Column>
            <LinkCard href="/friends" className="h-21 px-0 bg-surface1 hover:bg-surface3 text-subtext text-2xl text-center flex justify-center items-center">
                <span>{friendRequests ? `You have ${friendRequests.length} friend requests` : "Loading..."}</span>
            </LinkCard>
            <Card className="h-96 bg-surface1 text-subtext text-2xl text-center">
                Advertise your club here!
                <br />
                Enquire <a href="https://mail.google.com/mail/u/0/?to=david_z2463@srcschools.org&su=MCHSpost+club+advertising&tf=cm" target="_blank" className="underline">here</a>
            </Card>
        </Column>
    )
}
 
export default ExploreBar