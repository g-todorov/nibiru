import { Component, OnInit, Input } from '@angular/core';

import { mainMenuState } from '../animations/main-menu/main-menu.state';
import { bottomBorderState } from '../animations/main-menu/bottom-border.state';
import { topBorderState } from '../animations/main-menu/top-border.state';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.styl'],
  animations: [
    bottomBorderState,
    mainMenuState,
    topBorderState
  ]
})
export class MainMenuComponent implements OnInit {
  @Input() mainMenuState:string;
  @Input() topBorderState:string;
  @Input() bottomBorderState:string;

  constructor() { }

  ngOnInit() {
  }

}
