import { useContext } from "react"
import { ModalContext } from "/lib/context"

const useModalContext = () => useContext(ModalContext)

export default useModalContext