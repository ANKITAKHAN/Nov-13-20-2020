import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'last-day-ang-app';
  now: string;
  valid: boolean = false;
  cssClsName: string = 'wrong';
  name: string = '';
  message: string = '';

  randomNumber: number;

  constructor() {
    this.randomNumber = Math.round(Math.random() * 10);
  }

  buttonClicked() {
    this.now = new Date().toLocaleTimeString();
    this.valid = true;
    this.cssClsName = 'correct';
    
  }
  buttonClicked2() {
    this.message = `Hello ${this.name}`;
    this.randomNumber = Math.round(Math.random() * 10);
  }
}
