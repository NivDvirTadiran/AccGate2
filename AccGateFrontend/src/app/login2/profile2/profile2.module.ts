import { NgModule } from '@angular/core';

import { Profile2RoutingModule } from './profile2-routing.module';
import PortalComponent from './portal/portal.component';
import {StorybookModule} from "src/app/storybook/storybook.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import MyAccountForm2Component from "./my-account-form2/my-account-form2.component";
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';



@NgModule({
  declarations: [
    PortalComponent,
    MyAccountForm2Component,
    BoardUserComponent, BoardAdminComponent, BoardModeratorComponent
  ],
  imports: [
    Profile2RoutingModule,
    StorybookModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    PortalComponent,
    MyAccountForm2Component
  ],
  bootstrap: []
})
export class Profile2Module { }
