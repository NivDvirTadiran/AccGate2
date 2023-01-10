import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import RegisterForm2Component from "./login-main/register-form2/register-form2.component";
import {LoginMainComponent} from "./login-main/login-main.component";






const routes: Routes = [
  { path: 'login-main', component: LoginMainComponent },
  /*{ path: 'login2', component: Login2Component },*/
  //{ path: 'storybook-button-fortest', component: AvatarComponent },
  { path: 'register-form2', component: RegisterForm2Component },
  /*{ path: 'register-form2', component: MyAccountForm2Component },*/
  { path: 'profile2',loadChildren: () => import('../app.module').then(m => m.AppModule),},
  { path: '', redirectTo: 'login-main', pathMatch: 'full' },/**/
  { path: '**', redirectTo: 'login-main', },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Login2RoutingModule { }
