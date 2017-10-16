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
      state('nonActiveMenuItem', style({
        width: '200px',
        height: '200px'
      })),
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
    ]) 
  ]
})
export class AppComponent {
  menuState: string = 'inactive'
  firstMenuItemState: string = 'nonActiveMenuItem'
  secondMenuItemState: string = 'nonActiveMenuItem'
  thirdMenuItemState: string = 'nonActiveMenuItem'

  onFirstMenuItemClicked() {
    this.firstMenuItemState = 'activeMenuItem'
    this.secondMenuItemState = 'nonActiveMenuItem'
    this.thirdMenuItemState = 'nonActiveMenuItem'
    this.menuState = 'menuActive'
  }

  onSecondMenuItemClicked() {
    this.secondMenuItemState = 'activeMenuItem'
    this.firstMenuItemState = 'nonActiveMenuItem'
    this.thirdMenuItemState = 'nonActiveMenuItem'
    this.menuState = 'menuActive'
  }

  onThirdMenuItemClicked() {
    this.thirdMenuItemState = 'activeMenuItem'
    this.firstMenuItemState = 'nonActiveMenuItem'
    this.secondMenuItemState = 'nonActiveMenuItem'
    this.menuState = 'menuActive'
  }
}
