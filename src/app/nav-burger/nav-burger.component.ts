import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-burger',
  templateUrl: './nav-burger.component.html',
  styleUrls: ['./nav-burger.component.scss']
})
export class NavBurgerComponent implements OnInit {
  private burger!: any;

  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    this.burger = document.getElementById("myLinks");
    if (this.burger.style.display === "block") {
      this.burger.style.display = "none";
    } else {
      this.burger.style.display = "block";
    }
  }
}
