import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
export class AppComponent {
  mainMenuAnimation: string = 'inactive'
  firstMenuItemState: string = 'nonActiveMenuItem'
  secondMenuItemState: string = 'nonActiveMenuItem'
  thirdMenuItemState: string = 'nonActiveMenuItem'
  footerState: string = 'invisible'
  mainContentAnimation: string = 'invisible'
  contentItemsState: string = 'invisible'

  onFirstMenuItemClicked() {
    this.firstMenuItemState = 'activeMenuItem'
    this.secondMenuItemState = 'nonActiveMenuItem'
    this.thirdMenuItemState = 'nonActiveMenuItem'
    this.mainMenuAnimation = 'menuActive'
    this.footerState = 'visible'
    this.mainContentAnimation = 'visible'
    this.contentItemsState = 'visible'
  }

  onSecondMenuItemClicked() {
    this.secondMenuItemState = 'activeMenuItem'
    this.firstMenuItemState = 'nonActiveMenuItem'
    this.thirdMenuItemState = 'nonActiveMenuItem'
    this.mainMenuAnimation = 'menuActive'
    this.footerState = 'visible'
    this.mainContentAnimation = 'visible'
    this.contentItemsState = 'visible'
  }

  onThirdMenuItemClicked() {
    this.thirdMenuItemState = 'activeMenuItem'
    this.firstMenuItemState = 'nonActiveMenuItem'
    this.secondMenuItemState = 'nonActiveMenuItem'
    this.mainMenuAnimation = 'menuActive'
    this.footerState = 'visible'
    this.mainContentAnimation = 'visible'
    this.contentItemsState = 'visible'
  }
}
