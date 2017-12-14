import { trigger, state, animate, transition, style } from '@angular/animations';

export const footerState =
  trigger('footerState', [
    state('invisible', style ({
      opacity: '0'
    })),
    state('visible', style ({
      bottom: '0',
      opacity: '1'
    })),
    transition ('invisible <=> visible', animate('300ms ease-in')),
  ]);
