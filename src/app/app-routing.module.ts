import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ViewTeaksComponent } from './view-teaks/view-teaks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'auth', component: AuthComponent, },
  { path: 'view', component: ViewTeaksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
