import { trigger, state, animate, transition, style } from '@angular/animations';

export const bottomBorderState =
  trigger('bottomBorderState', [
    state('fullWidth', style ({
      width: '100%'
    })),
    transition ('noWidth <=> fullWidth', animate('300ms ease-in')),
    transition (':enter', [
      // style({
      //   transform: 'translateX(-100%)'
      // }),
      // animate('300ms ease-in-out',
      //   style({
      //     transform: '*'
      // }))
    ])
  ]);
