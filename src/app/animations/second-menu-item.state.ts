import { trigger, state, animate, transition, style } from '@angular/animations';

export const secondMenuItemState =
  trigger('secondMenuItemState', [
    state('selected', style({
      transform: 'rotate(45deg)',
      width: '150px',
      height: '150px'
    })),
    transition ('unselected <=> selected', animate('300ms ease-in')),
  ])
