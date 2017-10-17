import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
    trigger('menuState', [
      state('menuActive', style({
        top: '50px'
      })),
      transition('* => menuActive', animate('200ms ease-in')),
    ]),
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
    trigger('footerState', [
      state('visible', style ({
        bottom: '0'
      })),
      transition ('invisible => visible', animate('200ms ease-in')),
    ]),
    trigger('contentState', [
      state('visible', style ({
        bottom: '25px',
        top: '250px'
      })),
      transition ('invisible => visible', animate('200ms ease-in')),
    ])
  ]
})
export class AppComponent {
  menuState: string = 'inactive'
  firstMenuItemState: string = 'nonActiveMenuItem'
  secondMenuItemState: string = 'nonActiveMenuItem'
  thirdMenuItemState: string = 'nonActiveMenuItem'
  footerState: string = 'invisible'
  contentState: string = 'invisible'

  onFirstMenuItemClicked() {
    this.firstMenuItemState = 'activeMenuItem'
    this.secondMenuItemState = 'nonActiveMenuItem'
    this.thirdMenuItemState = 'nonActiveMenuItem'
    this.menuState = 'menuActive'
    this.footerState = 'visible'
    this.contentState = 'visible'
  }

  onSecondMenuItemClicked() {
    this.secondMenuItemState = 'activeMenuItem'
    this.firstMenuItemState = 'nonActiveMenuItem'
    this.thirdMenuItemState = 'nonActiveMenuItem'
    this.menuState = 'menuActive'
    this.footerState = 'visible'
    this.contentState = 'visible'
  }

  onThirdMenuItemClicked() {
    this.thirdMenuItemState = 'activeMenuItem'
    this.firstMenuItemState = 'nonActiveMenuItem'
    this.secondMenuItemState = 'nonActiveMenuItem'
    this.menuState = 'menuActive'
    this.footerState = 'visible'
    this.contentState = 'visible'
  }
}
