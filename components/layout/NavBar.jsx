import Card from "/components/wrapper/Card"
import Column from "/components/wrapper/Column"
import Button from "/components/input/Button"
import LinkButton from "/components/input/LinkButton"
import AboutPageLink from "/components/layout/AboutPageLink"

const NavBar = ({ authenticatedState }) => {
    return (
        <Column>
            <AboutPageLink />
            <Card className="bg-surface1">
                <Column>
                    <LinkButton href="/home" className="hover:bg-hover">Home</LinkButton>
                    {authenticatedState && <LinkButton href="/profile" className="hover:bg-hover">Profile</LinkButton>}
                    <LinkButton href="/users" className="bg-green hover:opacity-75 text-background">Users</LinkButton>
                    {authenticatedState && <Button className="bg-yellow hover:opacity-75 text-background">Upload</Button>}
                    {!authenticatedState && <LinkButton href="/signin" className="bg-yellow hover:opacity-75 text-background">Sign in</LinkButton>}
                </Column>
            </Card>
        </Column>
    )
}
 
export default NavBar