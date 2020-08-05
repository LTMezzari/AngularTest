import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponents, AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';
import { InstitutionComponent } from './screens/institution/institution.component';
import { PersonComponent } from './screens/person/person.component';
import { MealComponent } from './screens/meal/meal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ...AppComponents,
    InstitutionComponent,
    PersonComponent,
    MealComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
