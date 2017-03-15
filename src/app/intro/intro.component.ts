// Intro Component for quiz app

import { Component, OnInit } from '@angular/core';
import {QuizService} from "../services/quiz.service";
@Component({
  selector: 'app-intro',
  templateUrl:'./intro.component.html',
  //styleUrls: ['./intro.component.css']
  providers:[QuizService],
})
export class IntroComponent  {

  constructor() { }


}
