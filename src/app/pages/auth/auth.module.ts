// Angular modules
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Internal modules
import { AuthRoutingModule } from './auth-routing.module'
import { SharedModule } from '../../shared/shared.module'

// Components
import { AuthComponent } from 'src/app/layouts/auth-layout/auth.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
