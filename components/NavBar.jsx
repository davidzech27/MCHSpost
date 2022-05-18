import Card from "/components/Card"
import Column from "/components/column"
import Button from "/components/Button"
import LinkButton from "/components/LinkButton"
import AboutPageButton from "/components/AboutPageButton"

const NavBar = () => {
    return (
        <Column>
            <AboutPageButton />
            <Card className="bg-surface1">
                <Column>
                    <LinkButton href="/home" className="hover:bg-hover">Home</LinkButton>
                    <LinkButton href="/profile" className="hover:bg-hover">Profile</LinkButton>
                    <LinkButton href="/users" className="bg-green hover:opacity-75 text-background">Users</LinkButton>
                    <Button className="bg-yellow hover:opacity-75 text-background">Upload</Button>
                    {/* <LinkButton href="/signin" className="bg-yellow hover:opacity-75 text-background">Sign in</LinkButton> */}
                </Column>
            </Card>
        </Column>
    )
}
 
export default NavBar