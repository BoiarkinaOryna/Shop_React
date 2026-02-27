import { Dispatch, SetStateAction } from "react"
import { RegistrationModal } from "./RegistrationModal"
import { AuthorizationModal } from "./AithorizationModal"
import { EmailModal } from "./EmailModal"
import { NewPasswordModal } from "./NewPasswordModal"
import { NewPasswordSuccessModal } from "./NewPasswordSuccessModal"
import { RegistrationSuccessModal } from "./RegistrationSuccessfulModal"


interface ModalOpenerInterface {
    isOpen: boolean,
    type: "registration" | "authorization" | "changePassword" | "newPassword" | "changePasswordSuccess" | "registrationSuccess"
}

export function ModalOpener(props: ModalOpenerInterface){
    const { isOpen, type } = props
    if (!isOpen) return null

    if (type === "registration") return <RegistrationModal />
    if (type === "authorization") return <AuthorizationModal />
    if (type === "changePassword") return <EmailModal />
    if (type === "newPassword") return <NewPasswordModal />
    if (type === "changePasswordSuccess") return <NewPasswordSuccessModal />
    else return <RegistrationSuccessModal />
}