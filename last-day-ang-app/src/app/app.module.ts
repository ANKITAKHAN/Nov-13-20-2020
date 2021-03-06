import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Lab01Component } from './lab01/lab01.component';
import { MovieformComponent } from './movieform/movieform.component';
import { MoviegridComponent } from './moviegrid/moviegrid.component';

@NgModule({
  declarations: [
    AppComponent,
    Lab01Component,
    MovieformComponent,
    MoviegridComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
