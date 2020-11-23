import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.scss']
})
export class MovieformComponent implements OnInit {

  name: string;
  year: number;
  @Output() movieAddEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onMovieAddButtonClicked() {
    this.movieAddEvent.emit({ name: this.name, year: this.year });
  }

}
