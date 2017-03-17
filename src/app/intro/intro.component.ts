// Intro Component for quiz app

import { Component} from '@angular/core';
import {QuizService} from "../services/quiz.service";
import { RippleDirective } from 'ng2-ripple-directive';
@Component({
  selector: 'app-intro',
template:`
<app-quiz></app-quiz>
`,
  providers:[QuizService],

})
export class IntroComponent  {

  constructor() { }


}
