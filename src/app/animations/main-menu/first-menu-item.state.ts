import { trigger, state, animate, transition, style } from '@angular/animations';

export const firstMenuItemState =
  trigger('firstMenuItemState', [
    state('void', style({
      height: '150px'
    })),
    state('unselected', style({
      height: '50px'
    })),
    state('selected', style({
      width: '150px',
      height: '50px',
      border: '1px solid black',
      padding: '10px'
    })),
    transition ('void <=> *', animate('3000ms ease-in')),
    transition ('unselected <=> selected', animate('3000ms ease-in')),
  ]);
