import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AppRoutingGuard } from './app-routing.guard';
//import { Login2RoutingModule } from "./login-main/login-main-routing.module";
import Profile2Component from "./profile2/profile2.component";
import { RegisterComponent } from "./register/register.component";
//import { Register2Component } from "./register2/register2.component";
import { RegisterFormComponent } from "./login/register-form/register-form.component";
import RegisterForm2Component from "./login2/login-main/register-form2/register-form2.component";
import {Login2Component} from "./login2/login2.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login2', loadChildren: () => import('./login2/login2.module').then(m => m.Login2Module), },
  { path: 'register', component: RegisterComponent },
  //{ path: 'register2', component: Register2Component },
  { path: 'registeform', component: RegisterFormComponent },
  //{ path: 'registerform2', component: MyAccountForm2Component },
  { path: 'profile', component: ProfileComponent/*, canActivate: [AppRoutingGuard] */},
  { path: 'profile2', component: Profile2Component/*, canActivate: [AppRoutingGuard] */},
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'login2', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./app.module').then(m => m.AppModule),},
  { path: '**', redirectTo: 'login2',  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {useHash: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
