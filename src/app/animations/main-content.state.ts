import { trigger, state, animate, transition, style } from '@angular/animations';

export const mainContentState =
  trigger('mainContentState', [
    state('visible', style ({
      height: 'auto',
      bottom: '25px',
      top: '200px'
    })),
    transition ('invisible <=> visible', animate('300ms ease-in')),
  ])