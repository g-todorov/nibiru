import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const mainMenuAnimation =
  trigger('mainMenuAnimation', [
    state('menuActive', style({
      top: '0'
    })),
    transition('* => menuActive', animate('200ms ease-in')),
  ]);