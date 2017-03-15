import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { QuizComponent } from './quiz/quiz.component';
import { ErrorComponent } from './error/error.component';
import { AgmCoreModule } from 'angular2-google-maps/core';


//path's to routes//
const appRoutes: Routes = [
  {path: 'intro-component', component: IntroComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', redirectTo: '/quiz', pathMatch: 'full'},
  {path: '**', component:ErrorComponent }

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
    ErrorComponent
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
