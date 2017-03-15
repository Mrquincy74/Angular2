import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
//import {QuestionService} from '../services/question.service';
import {Http,Response} from '@angular/http';
//import 'rxjs/Rx';
@Component({
  selector: 'app-error',
  template:`<h1>{{ title }}</h1>
  <!-- this creates a google map on the page with the given lat/lng from -->
  <!-- the component as the initial center of the map: -->
<sebm-google-map [latitude]="lat" [longitude]="lng">
<sebm-google-map-marker [latitude]="lat" [longitude]="lng">

  </sebm-google-map-marker>
  </sebm-google-map>`

})
export class ErrorComponent {


  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;


}
