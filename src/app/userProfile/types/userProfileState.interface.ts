import { ProfileInterface } from '../../shared/types/profileInterface'

export interface UserProfileStateInterface {
  data: ProfileInterface | null
  isLoading: boolean
  error: string | null
}
