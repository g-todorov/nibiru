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
      background: 'black',
      width: '150px',
      height: '50px'
    })),
    transition ('void <=> *', animate('300ms ease-in')),
    transition ('unselected <=> selected', animate('300ms ease-in')),
  ]);
