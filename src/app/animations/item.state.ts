import { trigger, state, animate, transition, style } from '@angular/animations';

export const itemState =
  trigger('itemState', [
    state('void', style ({
      opacity: '0'
    })),
    state('opened', style ({
      opacity: '1'
    })),
    state('closed', style ({
      opacity: '0'
    })),
    transition ('void => *', [
      animate('300ms ease-in', style({
        // opacity: 0
     }))
    ]),
    transition ('* => void', [
      animate('300ms ease-in')
    ])
  ])
