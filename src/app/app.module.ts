import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewTeaksComponent } from './view-teaks/view-teaks.component';
import { HomeComponent } from './home/home.component';
import { MyDayActivitiesComponent } from './home/my-day-activities/my-day-activities.component';
import { EditMyDayActivitiesComponent } from './home/edit-my-day-activities/edit-my-day-activities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewTeaksComponent,
    HomeComponent,
    MyDayActivitiesComponent,
    EditMyDayActivitiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
