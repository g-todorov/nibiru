import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
    trigger('menuState', [
      state('menuActive', style({
        top: '100px'
      })),
      transition('* => menuActive', animate('200ms ease-in')),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  menuState: string = 'inactive'

  activateMenu() {
    this.menuState = 'menuActive'
  }
}
