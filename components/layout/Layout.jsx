import useProfile from "/hooks/api/useProfile"

import NavBar from "/components/layout/NavBar"
import ExploreBar from "/components/layout/ExploreBar"

const Layout = ({ Component }) => {
    const { profile, unauthenticated } = useProfile()

    return (
        <div className="min-h-screen flex bg-background">
            <div className="h-screen basis-1/4 sticky top-0 p-8">
                <NavBar authenticatedState={!unauthenticated} />
            </div>
            <div className="min-h-screen basis-1/2 py-8">
                <Component profile={profile} authenticatedState={!unauthenticated} />
            </div>
            <div className="h-screen basis-1/4 sticky top-0 p-8">
                <ExploreBar />
            </div>
        </div>
    )
}

export default Layout