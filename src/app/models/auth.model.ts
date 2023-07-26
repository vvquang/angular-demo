import { ERole } from '@app/enums/role.enum'

export interface IAuthStorage {
  token: string
  role: ERole
}
