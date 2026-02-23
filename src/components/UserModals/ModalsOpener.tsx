import { RegistrationModal } from "./RegistrationModal"


interface ModalOpenerInterface {
    isOpen: boolean
    type: "registration" | "authorization" | "changePassword" | "newPassword" | "changePasswordSuccess" | "registrationSuccess"
}

export function ModalOpener(props: ModalOpenerInterface){
    const { isOpen, type } = props
    if (!isOpen) return null

    if (type === "registration") return <RegistrationModal />
    return <div></div>
}