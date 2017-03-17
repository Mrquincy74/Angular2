import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { QuizComponent } from './quiz/quiz.component';
import { DemoComponent } from './demoMap/demo.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MaterialModule } from '@angular/material';


//path's to routes//
const appRoutes: Routes = [
  {path: 'intro-component', component: IntroComponent},
  {path: 'google-map', component: DemoComponent},
  {path: '', redirectTo: '/intro-component', pathMatch: 'full'},
  {path: '**', component:DemoComponent }

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBihJ58JFKrau83aHD4FLO-dESQm1MXRcc'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    IntroComponent,
    QuizComponent,
    DemoComponent
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
