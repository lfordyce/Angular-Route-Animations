import { Component, OnInit } from '@angular/core';
import { listAnimation } from '../animations/list.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ listAnimation ]
})
export class HomeComponent implements OnInit {

  items = [];

  constructor() {
    this.items = ['item one', 'item two', 'item three'];
  }

  ngOnInit() {
  }

  pushItem() {
    this.items.push('Adding new item to items');
  }

  removeItem() {
    this.items.pop();
  }

}
