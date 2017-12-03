import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public routes = [];

  constructor() { }

  ngOnInit() {
    this.routes = [
      {
        label: 'Home',
        path: '/home'
      },
      {
        label: 'Pricing',
        path: '/pricing'
      }
    ];
  }

}
