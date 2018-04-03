import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

import { mainMenuState } from './animations/main-menu/main-menu.state';
// import { footerState } from './animations/footer.state';
import { mainContentState } from './animations/main-content.state';
import { bottomBorderState } from './animations/main-menu/bottom-border.state';
import { topBorderState } from './animations/main-menu/top-border.state';
import { routerTransition } from './animations/router-transition.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
    // footerState,
    mainContentState,
    routerTransition
  ]
})
export class AppComponent implements OnInit {
  mainMenuState = 'inactive';
  footerState = 'invisible';
  mainContentState = 'invisible';
  bottomBorderState = 'noWidth';
  topBorderState = 'noWidth';

  currentYear: number = (new Date()).getFullYear();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof RoutesRecognized) {
        if (event.state.url === '/first') {
          this.activateLandingPage();
        } else if (event.state.url === '/second') {
          this.activateLandingPage();
        } else if (event.state.url === '/about') {
          this.activateLandingPage();
        }

        if (event.state.url === '/') {
          this.bottomBorderState = 'noWidth';
          this.topBorderState = 'noWidth';
          this.mainMenuState = 'inactive';
          this.mainContentState = 'invisible';
          this.footerState = 'invisible';
        }

        if (event.state.url !== '/') {
          this.mainMenuState = 'active';
          this.mainContentState = 'visible';
          this.footerState = 'visible';
        }
      }
    });
  }


  activateLandingPage() {
    this.mainMenuState = 'active';
    this.footerState = 'visible';
    this.mainContentState = 'visible';
    this.bottomBorderState = 'fullWidth';
    this.topBorderState = 'fullWidth';
  }

  getState(outlet) {
    // console.log(outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }
}
