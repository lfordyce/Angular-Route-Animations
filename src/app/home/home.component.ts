import { Component, OnInit } from '@angular/core';
// import { bubbleAnimation } from '../animations/bubble.animation';
import { homeTransition } from '../animations/home.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ homeTransition ],
  host: { '[@homeTransition]': '' }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
