import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviegrid',
  templateUrl: './moviegrid.component.html',
  styleUrls: ['./moviegrid.component.scss']
})
export class MoviegridComponent implements OnInit {

  @Input() movies = [];
  constructor() { }

  ngOnInit(): void {
  }

}
