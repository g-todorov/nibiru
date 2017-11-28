import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

import {mainMenuAnimation} from './animations/main-menu.animation'
import {footerAnimation} from './animations/footer.animation'
import {mainContentAnimation} from './animations/main-content.animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
    mainMenuAnimation,
    footerAnimation,
    mainContentAnimation,
    trigger('firstMenuItemState', [
      state('activeMenuItem', style({
        transform: 'rotate(45deg)',
        width: '150px',
        height: '150px'
      })),
      transition ('nonActiveMenuItem <=> activeMenuItem', animate('200ms ease-in')),
    ]),
    trigger('secondMenuItemState', [
      state('activeMenuItem', style({
        transform: 'rotate(45deg)',
        width: '150px',
        height: '150px'
      })),
      transition ('nonActiveMenuItem <=> activeMenuItem', animate('200ms ease-in')),
    ]),
    trigger('thirdMenuItemState', [
      state('activeMenuItem', style({
        transform: 'rotate(45deg)',
        width: '150px',
        height: '150px'
      })),
      transition ('nonActiveMenuItem <=> activeMenuItem', animate('200ms ease-in')),
    ]),
    trigger('contentState', [
      state('visible', style ({
        height: 'auto',
        bottom: '25px',
        top: '250px'
      })),
      transition ('invisible => visible', animate('200ms ease-in')),
    ]),
    trigger('contentItemsState', [
      state('visible', style ({
        display: 'block'
      })),
      transition ('invisible => visible', animate('200ms ease-in')),
    ])
  ]
})
export class AppComponent implements OnInit {
  mainMenuAnimation: string = 'inactive'
  firstMenuItemState: string = 'nonActiveMenuItem'
  secondMenuItemState: string = 'nonActiveMenuItem'
  thirdMenuItemState: string = 'nonActiveMenuItem'
  footerAnimation: string = 'invisible'
  mainContentAnimation: string = 'invisible'
  contentItemsState: string = 'invisible'

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof RoutesRecognized) {
        if (event.state.url === '/first') {
          this.firstMenuItemState = 'activeMenuItem'
        }
        else if (event.state.url === '/second') {
          this.secondMenuItemState = 'activeMenuItem'
        }
        else if (event.state.url === '/third') {
          this.thirdMenuItemState = 'activeMenuItem'
        }

        if (event.state.url !== '/') {
          this.mainMenuAnimation = 'menuActive'
          this.mainContentAnimation = 'visible'
          this.footerAnimation = 'visible'
        }
      }
    });
  }

  onFirstMenuItemClicked() {
    this.firstMenuItemState = 'activeMenuItem'
    this.secondMenuItemState = 'nonActiveMenuItem'
    this.thirdMenuItemState = 'nonActiveMenuItem'
    this.mainMenuAnimation = 'menuActive'
    this.footerAnimation = 'visible'
    this.mainContentAnimation = 'visible'
    this.contentItemsState = 'visible'
  }

  onSecondMenuItemClicked() {
    this.secondMenuItemState = 'activeMenuItem'
    this.firstMenuItemState = 'nonActiveMenuItem'
    this.thirdMenuItemState = 'nonActiveMenuItem'
    this.mainMenuAnimation = 'menuActive'
    this.footerAnimation = 'visible'
    this.mainContentAnimation = 'visible'
    this.contentItemsState = 'visible'
  }

  onThirdMenuItemClicked() {
    this.thirdMenuItemState = 'activeMenuItem'
    this.firstMenuItemState = 'nonActiveMenuItem'
    this.secondMenuItemState = 'nonActiveMenuItem'
    this.mainMenuAnimation = 'menuActive'
    this.footerAnimation = 'visible'
    this.mainContentAnimation = 'visible'
    this.contentItemsState = 'visible'
  }
}
