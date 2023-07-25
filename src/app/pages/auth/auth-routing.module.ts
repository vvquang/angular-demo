// Angular modules
import { NgModule }                 from '@angular/core';
import { Routes }                   from '@angular/router';
import { RouterModule }             from '@angular/router';

// Components
import { AuthComponent }            from 'src/app/layouts/auth-layout/auth.component';
import { ForgotPasswordComponent }  from './forgot-password/forgot-password.component';
import { LoginComponent }           from './login/login.component';

const routes : Routes = [
  {
    path      : '',
    component : AuthComponent,
    children  : [
      {
        path       : '',
        redirectTo : 'login',
        pathMatch  : 'full',
      },
      {
        path      : 'login',
        component : LoginComponent
      },
      {
        path      : 'forgot-password',
        component : ForgotPasswordComponent,
      },
    ]
  }
];

@NgModule({
  imports :
  [
    RouterModule.forChild(routes)
  ],
  exports :
  [
    RouterModule
  ],
  providers :
  [
  ]
})
export class AuthRoutingModule { }
