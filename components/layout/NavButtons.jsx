import useProfile from "/hooks/api/useProfile"
import useModalContext from "/hooks/context/useModalContext"

import Card from "/components/wrapper/Card"
import Column from "/components/wrapper/Column"
import Button from "/components/input/Button"
import LinkButton from "/components/input/LinkButton"
import UploadModal from "/components/modal/UploadModal"

const NavButtons = () => {
    const { unauthenticated } = useProfile()

    const { setModal } = useModalContext()

    return (
        <Card className="bg-surface1">
            <Column>
                <LinkButton href="/home" className="bg-surface2 hover:bg-hover">Home</LinkButton>
                {!unauthenticated && <LinkButton href="/profile" className="bg-surface2 hover:bg-hover">Profile</LinkButton>}
                <LinkButton href="/friends" className="bg-green hover:opacity-75 text-background">Friends</LinkButton>
                {!unauthenticated && <Button onClick={() => setModal(<UploadModal />)} className="bg-yellow hover:opacity-75 text-background">Post</Button>}
                {unauthenticated && <LinkButton href="/signin" className="bg-yellow hover:opacity-75 text-background">Sign in</LinkButton>}
            </Column>
        </Card>
    )
}
 
export default NavButtons