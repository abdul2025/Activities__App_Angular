import { HomeComponent } from './home/home.component';
import { ViewTeaksComponent } from './view-teaks/view-teaks.component';
import { CreateTeaksComponent } from './create-teaks/create-teaks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'create', component: CreateTeaksComponent, },
  { path: 'view', component: ViewTeaksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
