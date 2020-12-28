import { CurrentUserInterface } from '../../shared/types/currentUser.interface'
import { BackedErrorsInterface } from '../../shared/types/backedErrors.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationErrors: BackedErrorsInterface | null
}
