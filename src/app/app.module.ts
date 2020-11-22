import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateTeaksComponent } from './create-teaks/create-teaks.component';
import { ViewTeaksComponent } from './view-teaks/view-teaks.component';
import { HomeComponent } from './home/home.component';
import { MyDayActivitiesComponent } from './home/my-day-activities/my-day-activities.component';
import { EditMyDayActivitiesComponent } from './home/edit-my-day-activities/edit-my-day-activities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddingHoursDirective } from './shared/adding-hours.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateTeaksComponent,
    ViewTeaksComponent,
    HomeComponent,
    MyDayActivitiesComponent,
    EditMyDayActivitiesComponent,
    AddingHoursDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
