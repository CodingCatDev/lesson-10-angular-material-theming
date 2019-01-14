import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  title = 'Lesson 9 - Angular Material Router Outlet';
  constructor() { }

  ngOnInit() {
  }
  snavToggle(snav) {
    snav.toggle();
  }
}
