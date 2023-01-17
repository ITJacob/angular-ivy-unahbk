import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  random() {
  }
}
