import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const mainMenuState =
  trigger('mainMenuState', [
    state('active', style({
      height: '100px',
      top: '0'
    })),
    transition('inactive <=> active', [
      // query('.menu-item', [
      //   style({
      //     opacity: 0,
      //     transform: 'translateY(20px)'
      //   }),
      //   animate('300ms ease-in-out', style({ height: '50px' }))
      // ], { optional: true }),
      animate('300ms ease-in')
    ])
  ]);
