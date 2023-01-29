import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import PortalComponent from "./portal/portal.component";
import {AppRoutingGuard} from "../../app-routing.guard";
import {BoardUserComponent} from "./board-user/board-user.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {BoardAdmin2Component} from "./board-admin2/board-admin2.component";







const routes: Routes = [
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin2', component: BoardAdmin2Component },
  { path: 'profile2', component: PortalComponent, canActivate: [AppRoutingGuard] },
  { path: '', redirectTo: 'profile2', pathMatch: 'full' },/**/
  { path: '**', redirectTo: 'profile2', },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile2RoutingModule { }
