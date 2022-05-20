import Card from "/components/wrapper/Card"
import Column from "/components/wrapper/Column"
import Button from "/components/input/Button"
import LinkButton from "/components/input/LinkButton"

const NavButtons = ({ authenticatedState }) => {
    return (
        <Card className="bg-surface1">
            <Column>
                <LinkButton href="/home" className="bg-surface2 hover:bg-hover">Home</LinkButton>
                {authenticatedState && <LinkButton href="/profile" className="bg-surface2 hover:bg-hover">Profile</LinkButton>}
                <LinkButton href="/users" className="bg-green hover:opacity-75 text-background">Users</LinkButton>
                {authenticatedState && <Button className="bg-yellow hover:opacity-75 text-background">Upload</Button>}
                {!authenticatedState && <LinkButton href="/signin" className="bg-yellow hover:opacity-75 text-background">Sign in</LinkButton>}
            </Column>
        </Card>
    )
}
 
export default NavButtons