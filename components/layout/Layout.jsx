import { useState } from "react"
import { ProfileContext, ModalContext } from "/lib/context.js"
import useProfile from "/hooks/api/useProfile"

import NavBar from "/components/layout/NavBar"
import ExploreBar from "/components/layout/ExploreBar"

const Layout = ({ children }) => {
    const { profile, updateProfile, unauthenticated } = useProfile()

    const [modal, setModal] = useState(null)

    return (
        <ProfileContext.Provider value={{ profile, updateProfile, unauthenticated }}>
            <ModalContext.Provider value={{ setModal }}>
                {modal}

                <div className="min-h-screen flex bg-background">
                    <div className="h-screen basis-1/4 sticky top-0 p-8">
                        <NavBar />
                    </div>
                    <div className="min-h-screen basis-1/2 py-8">
                        {children}
                    </div>
                    <div className="h-screen basis-1/4 sticky top-0 p-8">
                        <ExploreBar />
                    </div>
                </div>
            </ModalContext.Provider>
        </ProfileContext.Provider>
    )
}

export default Layout