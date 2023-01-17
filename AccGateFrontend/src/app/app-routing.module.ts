import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login2', loadChildren: () => import('./login2/login2.module').then(m => m.Login2Module), },

  { path: '', redirectTo: 'login2', pathMatch: 'full' },
  { path: '**', redirectTo: 'login2',  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {useHash: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
