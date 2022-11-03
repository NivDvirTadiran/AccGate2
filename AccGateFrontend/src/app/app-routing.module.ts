import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AppRoutingGuard } from './app-routing.guard';
import Login2Component from "./login2/login2.component";
import Profile2Component from "./profile2/profile2.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent/*, canActivate: [AppRoutingGuard] */},
  { path: 'profile2', component: Profile2Component/*, canActivate: [AppRoutingGuard] */},
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./app.module').then(m => m.AppModule),},
  { path: '**', redirectTo: 'home', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
