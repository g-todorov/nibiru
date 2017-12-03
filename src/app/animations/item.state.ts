import { trigger, state, animate, transition, style } from '@angular/animations';

export const itemState =
  trigger('itemState', [
    state('opened', style ({
      // opacity: '0.6'
      height: '100%'
    })),
    transition ('void => *', [
      animate('300ms ease-in', style({
        // opacity: 0
     }))
    ])
  ])