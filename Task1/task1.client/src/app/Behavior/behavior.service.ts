import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  constructor() { }
  // declare and initialize the quote property
  // which will be a BehaviorSubject
  qoute = new BehaviorSubject("Hello world");


  // expose the BehaviorSubject as an Observable
  currentQuote = this.qoute.asObservable();

  // function to update the value of the BehaviorSubject
  updateQuote(newQuote: string) {
    this.qoute.next(newQuote);
  }



}
