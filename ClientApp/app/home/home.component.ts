import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public message: string;

  constructor() { }

  tiles = [
    {text: 'One', cols: 3, rows: 2, color: '#333'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Four', cols: 3, rows: 2, color: '#444'}
  ];
}
