import { trigger, state, animate, transition, style, query, group, stagger } from '@angular/animations';

const variables = require('../../../styles.styl');

console.log(variables);

export const mainMenuState =
  trigger('mainMenuState', [
    state('active', style({
      height: variables.menuHeight,
      top: 0
    })),
    state('void', style({
      height: '5px',
      top: '50%'
    })),
    transition('inactive <=> active', [
      animate('300ms ease-in')
    ]),
    transition (':enter', [
      query('.menu-bottom-border ', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('300ms ease-in-out',
          style({
            transform: '*'
        }))
      ]),
      group([
        style({
          // height: '0',
          // top: '50%'
        }),
        animate('300ms ease-in-out',
          style({
            height: '*',
            top: '*'
        })),
        query('.menu-item', [
          style({
            opacity: 0,
            height: 0,
          }),
          stagger(100, [
            animate('300ms ease-in-out',
              style({
                height: '*',
                opacity: 1
              })
            )
          ])
        ])
      ])
    ])
  ]);
