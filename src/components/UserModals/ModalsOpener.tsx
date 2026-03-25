import { RegistrationModal } from "./RegistrationModal"
import { AuthorizationModal } from "./AithorizationModal"
import { EmailModal } from "./EmailModal"
import { NewPasswordModal } from "./NewPasswordModal"
import { NewPasswordSuccessModal } from "./NewPasswordSuccessModal"
import { RegistrationSuccessModal } from "./RegistrationSuccessfulModal"
export type ModalType =
    | "registration"
    | "authorization"
    | "changePassword"
    | "newPassword"
    | "changePasswordSuccess"
    | "registrationSuccess"
interface ModalOpenerInterface {
    isOpen: boolean
    type: ModalType
    onClose: () => void
    setType: (type: ModalType) => void
}
export function ModalOpener({ isOpen, type, onClose, setType }: ModalOpenerInterface) {
    if (!isOpen) return null

    switch (type) {
        case "registration":
            return (
                <RegistrationModal
                    onClose={onClose}
                    switchToSuccess={() => setType("registrationSuccess")}
                    switchToAuthorization={() => setType("authorization")}
                />
            )

            case "authorization":
                return <AuthorizationModal onClose={onClose} switchToSuccess={() => setType("registrationSuccess")} />

        case "changePassword":
            return <EmailModal  />

        case "newPassword":
            return <NewPasswordModal />

        case "changePasswordSuccess":
            return <NewPasswordSuccessModal  />

        case "registrationSuccess":
            return <RegistrationSuccessModal  />

        default:
            return null
    }
}