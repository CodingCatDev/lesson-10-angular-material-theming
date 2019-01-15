import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  @ViewChild('snav') public sidenav: MatSidenav;
  routerSub: Subscription;
  title = 'Lesson 9 - Angular Material Router Outlet';
  constructor(private router: Router) {}
  // This will be used for closing the sidenav drawer and scrolling to the top of screen
  ngOnInit() {
    this.routerSub = this.router.events.subscribe(event => {
      if (this.sidenav && event instanceof NavigationEnd) {
        this.sidenav.close();
      }
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
  snavToggle(snav) {
    snav.toggle();
  }
}
