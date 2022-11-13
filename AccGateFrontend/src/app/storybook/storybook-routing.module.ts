import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [

  //{ path: 'storybook-button-fortest', component: ButtonFortestComponent },
  /*{ path: 'regist', component: RegisterForm2Component },*/
  /*{ path: 'register-form2', component: RegisterForm2Component },*/
  { path: '', redirectTo: 'home', pathMatch: 'full' },/**/
  { path: '**', redirectTo: 'home', },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Login2RoutingModule { }
