import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class PackageComponent implements OnInit {
  package: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  random() {}
}
