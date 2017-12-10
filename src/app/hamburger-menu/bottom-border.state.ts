import { trigger, state, animate, transition, style } from '@angular/animations';

export const bottomBorderState =
  trigger('bottomBorderState', [
    state('fullWidth', style ({
      width: '100%'
    })),
    transition ('noWidth <=> fullWidth', animate('300ms ease-in')),
  ])
