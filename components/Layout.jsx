import useProfile from "/hooks/profile/useProfile"

import NavBar from "/components/NavBar"
import ExploreBar from "/components/ExploreBar"

const Layout = ({ children }) => {
    const { profile, unauthenticated } = useProfile()


    return (
        <div className="min-h-screen flex bg-background">
            <div className="h-screen relative top-0 basis-1/4 p-8">
                <NavBar authenticatedState={!unauthenticated} />
            </div>
            <div className="min-h-screen basis-1/2 py-8">
                {children}
            </div>
            <div className="min-h-screen relative top-0 basis-1/4 p-8">
                <ExploreBar />
            </div>
        </div>
    )
}

export default Layout