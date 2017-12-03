import { trigger, state, animate, transition, style } from '@angular/animations';

export const footerState =
  trigger('footerState', [
    state('visible', style ({
      bottom: '0'
    })),
    transition ('invisible <=> visible', animate('300ms ease-in')),
  ])
