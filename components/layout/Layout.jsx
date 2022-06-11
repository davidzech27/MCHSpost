import { useState } from "react"
import { ModalContext } from "/lib/context"

import NavBar from "/components/layout/NavBar"
import ExploreBar from "/components/layout/ExploreBar"

const Layout = ({ children }) => {
    const [modal, setModal] = useState(null)


    return (
        <ModalContext.Provider value={{ openModal: (modal) => setModal(modal), closeModal: () => setModal(null) }}>
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
    )
}

export default Layout