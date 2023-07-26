import { NgModule } from '@angular/core'
import { ResolveFn, RouterModule, Routes } from '@angular/router'

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { ERole } from './enums/role.enum'
import { AuthGuard } from './helpers/auth.guard'
import { environment } from '@env/environment'

const authModule = () => import('./pages/auth/auth.module').then((m) => m.AuthModule)
const homeModule = () => import('./pages/home/home.module').then((mod) => mod.HomeModule)
const todoModule = () => import('./pages/todo/todo.module').then((mod) => mod.TodoModule)

const appName = environment.appName
const titlePage = (title: string): string => `${appName} - ${title}`

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: authModule,
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        title: titlePage('Home'),
        loadChildren: homeModule,
        canActivate: [AuthGuard],
      },
      {
        path: 'todo',
        title: titlePage('Todo'),
        loadChildren: todoModule,
        data: { roles: [ERole.Admin] },
        canActivate: [AuthGuard],
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
