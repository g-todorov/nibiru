import { Component, OnInit } from '@angular/core';

import { hamburgerMenuState } from '../animations/hamburger-menu.state';
import { hamburgerMenuContentState } from '../animations/hamburger-menu-content.state';
import { middleLineState } from '../animations/hamburger-menu/middle-line.state';
import { bottomLineState } from '../animations/hamburger-menu/bottom-line.state';
import { topLineState } from '../animations/hamburger-menu/top-line-state';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.styl'],
  animations: [
    hamburgerMenuState,
    hamburgerMenuContentState,
    middleLineState,
    bottomLineState,
    topLineState
  ]
})
export class HamburgerMenuComponent implements OnInit {
  hamburgerMenuState: string = 'closed';
  munuItemHoverState: string = 'notHovered';

  constructor() { }

  ngOnInit() {
  }

  toggleHamburgerMenu(state) {
    if (state === 'closed') {
      this.hamburgerMenuState = 'opened'
    }
    else if (state === 'opened') {
      this.hamburgerMenuState = 'closed'
    }
  }

  onMenuItemMouseEnter(state) {
    if (state === 'notHovered') {
      this.munuItemHoverState = 'hovered'
    }
    else if (state === 'hovered') {
      this.munuItemHoverState = 'notHovered'
    }
  }

}
