import { UserGuardGuard } from './../guards/user-guard.guard';
import { HomeComponent } from './../components/home/home.component';
import { LoginComponent } from './../components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[UserGuardGuard]},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
