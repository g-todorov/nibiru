import { trigger, state, animate, transition, style } from '@angular/animations';

export const footerAnimation =
trigger('footerAnimation', [
  state('visible', style ({
    bottom: '0'
  })),
  transition ('invisible => visible', animate('200ms ease-in')),
])
