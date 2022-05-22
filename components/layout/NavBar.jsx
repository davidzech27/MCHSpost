import Column from "/components/wrapper/Column"
import AboutPageLink from "/components/layout/AboutPageLink"
import NavButtons from "/components/layout/NavButtons"

const NavBar = () => {
    return (
        <Column>
            <AboutPageLink />
            <NavButtons />
        </Column>
    )
}
 
export default NavBar