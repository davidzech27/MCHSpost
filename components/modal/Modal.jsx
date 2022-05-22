import useModalContext from "/hooks/context/useModalContext"

import Card from "/components/wrapper/Card"
import SmallButton from "/components/input/SmallButton"

const Modal = ({ children }) => {
    const { setModal } = useModalContext()

    const close = () => setModal(null)

    return (
        <div onClick={close} className="h-screen w-screen fixed z-10 bg-background bg-opacity-85 flex justify-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="rounded-3xl">
                <Card className="w-[32rem] bg-surface1 relative">
                    <SmallButton onClick={close} className="absolute top-3 right-3 bg-surface3 hover:bg-hover font-bold">X</SmallButton>
                    {children}
                </Card>
            </div>
        </div>
    )
}
 
export default Modal