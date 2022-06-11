import { useContext } from "react"
import { ModalContext } from "/lib/context"

const useModal = () => useContext(ModalContext)

export default useModal