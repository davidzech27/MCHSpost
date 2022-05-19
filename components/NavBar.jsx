import Card from "/components/Card"
import Column from "/components/column"
import Button from "/components/Button"
import LinkButton from "/components/LinkButton"
import AboutPageLink from "/components/AboutPageLink"

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