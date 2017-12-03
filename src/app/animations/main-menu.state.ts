import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const mainMenuState =
  trigger('mainMenuState', [
    state('active', style({
      top: '0'
    })),
    transition('inactive <=> active', animate('300ms ease-in')),
  ]);