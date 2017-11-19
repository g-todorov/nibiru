import { trigger, state, animate, transition, style } from '@angular/animations';

export const mainContentAnimation =
  trigger('mainContentAnimation', [
    state('visible', style ({
      height: 'auto',
      bottom: '25px',
      top: '250px'
    })),
    transition ('invisible => visible', animate('200ms ease-in')),
  ])