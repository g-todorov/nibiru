import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const topBorderState =
  trigger('topBorderState', [
    state('fullWidth', style ({
      width: '100%',
      opacity: 0
    })),
    transition ('noWidth <=> fullWidth', animate('3000ms ease-in')),
    transition (':enter', [
      style({
        transform: 'translateX(100%)'
      }),
      animate('3000ms ease-in-out', keyframes([
          style({ transform: 'translateX(50%)', offset: 0.99 }),
          style({ transform: '*', offset: 1 }),
        ])
      )
    ])
  ]);
