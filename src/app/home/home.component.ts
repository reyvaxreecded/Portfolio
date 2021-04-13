import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private viewPort: ViewportScroller) { }

  ngOnInit(): void {
  }

  nextCategory(){
    const scroll = this.viewPort.getScrollPosition();
    const height = window.innerHeight;
    this.viewPort.scrollToPosition([0, scroll[1]+height])
  }
}
