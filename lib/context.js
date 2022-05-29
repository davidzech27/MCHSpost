import { createContext } from "react"

const ProfileContext = createContext({ profile: null, updateProfile: null, posts: null, unauthenticated: false })

const ModalContext = createContext({ setModal: null })

export { ProfileContext, ModalContext }