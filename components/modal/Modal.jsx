import Card from "/components/wrapper/Card"
import SmallButton from "/components/input/SmallButton"

const Modal = ({ children, close }) => {
    return (
        <div onClick={close} className="h-screen w-screen fixed z-10 bg-background bg-opacity-85 flex justify-center items-center">
            <div onClick={(e) => e.stopPropagation()}>
                <Card className="w-[32rem] bg-surface1 relative">
                    <SmallButton onClick={close} className="absolute top-3 right-3 bg-surface2 hover:bg-surface3">X</SmallButton>
                    {children}
                </Card>
            </div>
        </div>
    )
}
 
export default Modal