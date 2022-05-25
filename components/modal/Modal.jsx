import useModalContext from "/hooks/context/useModalContext"

import Card from "/components/wrapper/Card"
import SmallButton from "/components/input/SmallButton"

const Modal = ({ open = true, children }) => {
    const { setModal } = useModalContext()

    const close = () => setModal(null)

    if (!open) close()

    return (
        <div onClick={close} className="h-screen w-screen fixed z-50 bg-background bg-opacity-85 flex justify-center items-center">
            <Card onClick={(e) => e.stopPropagation()} className="w-[32rem] bg-surface1 relative">
                <SmallButton onClick={close} className="absolute top-3 right-3 bg-surface3 hover:bg-hover">
                    <svg className="h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </SmallButton>
                {children}
            </Card>
        </div>
    )
}
 
export default Modal