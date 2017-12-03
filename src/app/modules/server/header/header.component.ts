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
        label: 'Monitoring',
        path: 'monitoring'
      },
      {
        label: 'Settings',
        path: 'settings'
      }
    ];
  }

}
