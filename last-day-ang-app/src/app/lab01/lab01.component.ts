import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Game from './game';

@Component({
  selector: 'app-lab01',
  templateUrl: './lab01.component.html',
  styleUrls: ['./lab01.component.scss']
})
export class Lab01Component implements OnInit {


  game: Game = new Game();
  guess: number = 0;
  invalidGuess: boolean = false;

  @Input() heading: string;
  @Input() subheading: string;

  @Output() overEvent = new EventEmitter();

  ngOnInit(): void {
  }

  playButtonClicked() {
    if (this.guess > 100 || this.guess < 1) {
      this.invalidGuess = true;
    } else {
      this.invalidGuess = false;
      this.game.play(this.guess);
    }
    if (this.game.gameOver) {
      this.overEvent.emit({name: 'Sam'}); // Pass any data
    }
  }

}
