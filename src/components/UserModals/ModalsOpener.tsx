import { RegistrationModal } from "./RegistrationModal"
import { AuthorizationModal } from "./AithorizationModal"
import { EmailModal } from "./EmailModal"
import { NewPasswordModal } from "./NewPasswordModal"
import { NewPasswordSuccessModal } from "./NewPasswordSuccessModal"
import { RegistrationSuccessModal } from "./RegistrationSuccessfulModal"

interface ModalOpenerInterface {
    isOpen: boolean
    type: "registration" | "authorization" | "changePassword" | "newPassword" | "changePasswordSuccess" | "registrationSuccess"
}

export function ModalOpener({ isOpen, type }: ModalOpenerInterface) {
    if (!isOpen) return null

    switch(type) {
        case "registration": return <RegistrationModal />
        case "authorization": return <AuthorizationModal  />
        case "changePassword": return <EmailModal  />
        case "newPassword": return <NewPasswordModal  />
        case "changePasswordSuccess": return <NewPasswordSuccessModal />
        case "registrationSuccess": return <RegistrationSuccessModal/>
        default: return null
    }
}