import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './pages/auth/login/login.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path         : 'auth',
    loadChildren : () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
      },
      {
        path: 'todo',
        loadChildren: () => import('./pages/todo/todo.module').then(mod => mod.TodoModule),
      },
      { path : '',   redirectTo : '/home', pathMatch : 'full' },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
