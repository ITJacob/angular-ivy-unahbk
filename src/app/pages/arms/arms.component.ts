import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arms',
  templateUrl: './arms.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class ArmsComponent implements OnInit {
  arms: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  random() {}
}
