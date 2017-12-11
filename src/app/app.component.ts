import { Component, OnInit } from '@angular/core';
// import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

import { mainMenuState } from './animations/main-menu/main-menu.state'
import { footerState } from './animations/footer.state'
import { mainContentState } from './animations/main-content.state'
import { bottomBorderState } from './animations/main-menu/bottom-border.state'
import { topBorderState } from './animations/main-menu/top-border.state'
import { firstMenuItemState } from './animations/main-menu/first-menu-item.state'
import { secondMenuItemState } from './animations/main-menu/second-menu-item.state'
import { thirdMenuItemState } from './animations/main-menu/third-menu-item-state'
import { routerTransition } from './animations/router-transition.state'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
    bottomBorderState,
    footerState,
    mainContentState,
    mainMenuState,
    firstMenuItemState,
    secondMenuItemState,
    thirdMenuItemState,
    routerTransition,
    topBorderState
  ]
})
export class AppComponent implements OnInit {
  mainMenuState: string = 'inactive'
  firstMenuItemState: string
  secondMenuItemState: string
  thirdMenuItemState: string
  footerState: string = 'invisible'
  mainContentState: string = 'invisible'
  bottomBorderState: string = 'noWidth'
  topBorderState: string = 'noWidth'

  currentYear: number = (new Date()).getFullYear();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof RoutesRecognized) {
        if (event.state.url === '/first') {
          this.onFirstMenuItemClicked();
        }
        else if (event.state.url === '/second') {
          this.onSecondMenuItemClicked();
        }
        else if (event.state.url === '/third') {
          this.onThirdMenuItemClicked();
        }

        if (event.state.url === '/') {
          this.firstMenuItemState = 'void'
          this.secondMenuItemState = 'void'
          this.thirdMenuItemState = 'void'
          this.bottomBorderState = 'noWidth'
          this.topBorderState = 'noWidth'
          this.mainMenuState = 'inactive'
          this.mainContentState = 'invisible'
          this.footerState = 'invisible'
        }

        if (event.state.url !== '/') {
          this.mainMenuState = 'active'
          this.mainContentState = 'visible'
          this.footerState = 'visible'
        }
      }
    });
  }

  onFirstMenuItemClicked() {
    this.firstMenuItemState = 'selected'
    this.secondMenuItemState = 'unselected'
    this.thirdMenuItemState = 'unselected'

    this.activateLandingPage()
  }

  onSecondMenuItemClicked() {
    this.secondMenuItemState = 'selected'
    this.firstMenuItemState = 'unselected'
    this.thirdMenuItemState = 'unselected'

    this.activateLandingPage()
  }

  onThirdMenuItemClicked() {
    this.thirdMenuItemState = 'selected'
    this.firstMenuItemState = 'unselected'
    this.secondMenuItemState = 'unselected'

    this.activateLandingPage()
  }

  activateLandingPage() {
    this.mainMenuState = 'active'
    this.footerState = 'visible'
    this.mainContentState = 'visible'
    this.bottomBorderState = 'fullWidth'
    this.topBorderState = 'fullWidth'
  }

  getState(outlet) {
    // console.log(outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }
}
