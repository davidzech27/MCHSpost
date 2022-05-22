import { createContext } from "react"

const ProfileContext = createContext({ profile: null, updateProfile: null, unauthenticated: null })

const ModalContext = createContext({ setModal: null })

export { ProfileContext, ModalContext }