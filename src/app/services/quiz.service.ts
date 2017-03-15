import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {
///Http request Service to json files to obtain questions for quiz
  constructor(private http: Http) {}


  get(url:string) {
    return this.http.get(url).map(res => res.text().length > 0 ? res.json() : null);
  }

  //introPage (intro: string){
//this.router.navigate('/'+ 'intro.component.html') ;
  //}
  getAll() {
    return [
      {id: 'assets/data/aspnet.json', name: 'Asp.Net'},
      {id: 'assets/data/csharp.json', name: 'C Sharp'},
      {id: 'assets/data/designPatterns.json', name: 'Design Patterns'},
      {id: 'assets/data/film.json', name: 'Film Trivia'}
    ];

  }
}
