import Column from "/components/wrapper/Column"
import AboutPageLink from "/components/layout/AboutPageLink"
import NavButtons from "/components/layout/NavButtons"

const NavBar = ({ authenticatedState }) => {
    return (
        <Column>
            <AboutPageLink />
            <NavButtons authenticatedState={authenticatedState} />
        </Column>
    )
}
 
export default NavBar