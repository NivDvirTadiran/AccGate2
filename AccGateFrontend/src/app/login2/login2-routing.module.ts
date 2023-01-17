import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import RegisterForm2Component from "./login-main/register-form2/register-form2.component";
import {LoginMainComponent} from "./login-main/login-main.component";
import {AppRoutingGuard} from "../app-routing.guard";






const routes: Routes = [
  { path: 'login-main', component: LoginMainComponent },
  { path: 'register-form2', component: RegisterForm2Component },
  {
    path: 'profile2',
    loadChildren: () => import('./profile2/profile2.module').then(m => m.Profile2Module),
    canActivate: [AppRoutingGuard]
  },
  { path: '', redirectTo: 'login-main', pathMatch: 'full' },/**/
  { path: '**', redirectTo: 'login-main', },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Login2RoutingModule { }
