import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const routerTransition =
  trigger('routerTransition', [
    state('section', style({
      // opacity: 1
    })),
    transition ('* => section', [
      query(':enter .items-section', [
        style({
          opacity: 0,
          transform: 'translateY(20px)'
        }),
        animate('300ms ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
      ], { optional: true })
    ]),
    transition ('* <=> details', [
      query(':enter .item-details', [
        style({
          opacity: 0
        }),
        animate('300ms ease-in-out',
          style({ opacity: '1' }))
      ], { optional: true }),
      query(':leave .item-details', [
        animate('300ms ease-in-out',
          style({ opacity: '0' }))
      ], { optional: true })
    ]),
  ])
